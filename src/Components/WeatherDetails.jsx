import { GiWindpump } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

export default function WeatherDetails({ weather }) {
  return (
    <div className="leading-none text-2xl md:text-3xl lg:4xl xl:5xl 2xl:6xl block font-weight-bolder">
      {weather?.main?.temp}
      <b className="text-lg lg:text-xl xl:text-2xl block font-light">
        {weather?.weather[0]?.main}, {weather?.weather[0]?.description}
      </b>
      <div className="divide-y divide-dashed flex flex-col gap-3 lg:rounded-r-lg w-full mt-6">
        <div className="flex justify-between w-full py-3">
          <span className="w-auto flex gap-1 items-center font-bold uppercase text-sm lg:text-md xl:text-lg">
            <WiHumidity /> Humidity
          </span>
          <span className="w-auto text-sm lg:text-md xl:text-lg text-right">
            {weather?.main?.humidity}%
          </span>
        </div>
        <div className="flex justify-between w-full py-3">
          <span className="w-auto flex gap-1 items-center font-bold uppercase text-sm lg:text-md xl:text-lg">
            <GiWindpump />
            Wind Speed
          </span>
          <span className="w-auto text-sm lg:text-md xl:text-lg text-right">
            {weather?.wind?.speed} meter/sec
          </span>
        </div>
      </div>
    </div>
  );
}