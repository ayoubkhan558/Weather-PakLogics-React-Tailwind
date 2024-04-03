
import WeatherIcon from "@components/WeatherIcon";
import LocationInfo from "@components/LocationInfo";
import WeatherDetails from "@components/WeatherDetails";


function WeatherInfo({ weather, geo }) {
  // Check if weather and geo data are available
  if (!weather || !geo) {
    return <>
      <div className="bg-blue-400/30 backdrop-blur rounded-lg overflow-hidden shadow-lg justify-center mt-16 lg:mt-64 min-h-72 lg:min-h-80 xl:min-h-96">
        <div className="p-4 lg:px-5 xl:px-7 2xl:p-8">
          <p className="text-red-600">
            Error: Weather or location data not available.
          </p>
        </div>
      </div>
    </>;
  }

  return (
    <>
      <div className="grid grid-cols-4 bg-blue-400/30 backdrop-blur rounded-lg overflow-hidden shadow-lg justify-center mt-16 lg:mt-64">
        <div className="col-span-4 lg:col-span-2 flex rounded-lg bg-auto">
          <LocationInfo weather={weather} geo={geo} />
        </div>
        <div className="col-span-4 lg:col-span-2 bg-primary-900/40 text-white">
          <div className="p-4 lg:px-5 xl:px-7 2xl:p-8">
            <WeatherIcon icon={weather?.weather[0]?.icon} />
            <WeatherDetails weather={weather} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherInfo;
