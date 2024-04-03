
import { GiModernCity } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { TbSunset2 } from "react-icons/tb";
import Flag from 'react-world-flags';

function convertUnixToTime(unixTimestamp) {
  const timeMilliseconds = unixTimestamp * 1000;
  const date = new Date(timeMilliseconds);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export default function LocationInfo({ weather, geo }) {
  return (
    <div className="p-4 lg:px-5 xl:px-7 2xl:p-8 flex flex-col justify-between text-white">
      <div className="mb-20">
        <div className="flex items-center gap-1 xl:gap-2 font-bold text-xl md:text-2xl xl:text-3xl leading-none mb-2">
          <GiModernCity className="w-6" />
          {weather?.name}
        </div>
        <div className="flex items-center gap-1 xl:gap-2 font-bold text-sm md:text-md xl:text-lg leading-none mb-1">
          <MdOutlineLocationOn className="w-6" />
          <span>{geo?.state}</span>
          <Flag
            code="pk"
            className="ml-2 h-3 sm:h-4 md:h-4 xl:5 2xl:h-6"
            fallback={<span>Unknown</span>}
          />
        </div>
        <h3 className="flex items-center gap-1 xl:gap-2 leading-none opacity-75 text-xs md:text-base xl:text-md mt-2">
          <LuCalendarDays className="w-6" />
          {new Date().toDateString()}
        </h3>
      </div>
      <div>
        <p className="flex items-center gap-1 xl:gap-2 text-xl">
          <WiSunrise />
          Sunrise: &nbsp;{convertUnixToTime(weather?.sys?.sunrise)}
        </p>
        <p className="flex items-center gap-1 xl:gap-2 text-xl">
          <TbSunset2 />
          Sunset: &nbsp;{convertUnixToTime(weather?.sys?.sunset)}
        </p>
      </div>
    </div>
  );
}