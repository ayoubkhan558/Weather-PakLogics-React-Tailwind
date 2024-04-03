import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import axios from "axios"
import { ImSpinner6 } from "react-icons/im";

import WeatherInfo from "@components/WeatherInfo"

let defaultInputClass =
  "py-2 px-3 pe-11 block w-full border-2 shadow-sm rounded-1 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";

const bankAccountSchema = yup.object().shape({
  city: yup.string().required('City Name is required'),
});

// Create an instance of Notyf
const notyf = new Notyf();

function Home() {
  const [weather, setWeather] = useState();
  const [geo, setGeo] = useState();
  const [city, setCity] = useState("Lahore");
  const [loadingData, setLoadingData] = useState(false);

  const {
    handleSubmit: handleCityForm,
    register: registerCityForm,
    formState: { errors: cityFormErrors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
  });

  const cityFormSubmit = async (data) => {
    setCity(data?.city);
    getWeatherGeoInfo(data?.city);
  };

  const getWeatherGeoInfo = (city) => {
    setLoadingData(true);
    let endpoints = [
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}&lang=ur`,
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&lang=ur&units=metric`
    ];

    axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(response => {
        // Log response data
        console.log(response[0]?.data[0]);
        console.log(response[1]?.data?.weather);
        setGeo(response[0]?.data[0]);
        setWeather(response[1]?.data);
        // console.log(response?.status);
      })
      .catch(error => {
        setWeather();
        const errorMsg = error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong!";
        // Display error notification
        notyf.error(errorMsg);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }

  const getWeatherInfo = (city) => {
    setLoadingData(true);

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2cb6b07f4fc0a3d186c0fb2034a443f4`)
      .then(response => {
        // Log response data
        setWeather(response?.data);
        console.log(response?.data);
      })
      .catch(error => {
        setWeather();
        const errorMsg = error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong!";
        // Display error notification
        notyf.error(errorMsg);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }

  useEffect(() => {
    // getWeatherInfo(city);
    getWeatherGeoInfo(city);
  }, [])

  return (
    <div className="container-main flex flex-col space-y-6 min-h-screen mb-4">

      <div className="card flex items-center justify-center w-full mt-4 mx-auto">
        <form onSubmit={handleCityForm(cityFormSubmit)} className="w-full lg:w-3/4 2xl:w-2/4">
          <div className="flex justify-center gap-2 rounded-lg shadow-sm">
            <input
              type="text"
              className={` ${defaultInputClass} ${cityFormErrors?.city ? 'border-red-400' : 'border-gray-200'}`}
              {...registerCityForm('city')}
              placeholder="Enter city name"
            />
            <button
              type="submit"
              disabled={loadingData}
              className="btn-main"
            >
              {!loadingData ?
                <>Search</>
                :
                <>
                  <ImSpinner6
                    className={`mr-2 animate-spin `}
                  />
                  Loading
                </>
              }
            </button>
          </div>
          {cityFormErrors?.city &&
            <>
              <p className="text-red-800 text-xs mt-1">
                {cityFormErrors?.city?.message}
              </p>
            </>
          }
        </form>
      </div>

      <WeatherInfo
        weather={weather}
        geo={geo}
        loading={loadingData}
      />

    </div>
  );
}

export default Home;
