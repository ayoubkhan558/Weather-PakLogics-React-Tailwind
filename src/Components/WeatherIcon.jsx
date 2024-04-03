
export default function WeatherIcon({ icon }) {
  return (
    <div className="leading-none text-2xl md:text-3xl lg:4xl xl:5xl 2xl:6xl block font-weight-bolder">
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
    </div>
  );
}