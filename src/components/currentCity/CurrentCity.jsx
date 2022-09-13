import { useContext, useEffect } from "react";
import LocationContext from "../../context/LocationContext";
import s from "./CurrentCity.module.css";
import Search from "../search/Search";
import { useState } from "react";

function CurrentCity() {
  const { searchLocation, location, onSearchCurrentCity, currentCity } =
    useContext(LocationContext);
  const { latitude, longitude } = location;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    searchLocation();
  }, []);

  useEffect(() => {
    onSearchCurrentCity(latitude, longitude);
  }, [location]);

  const fecha = new Date();

  const openSearch = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={s.conteiner}>
        <div className={s.weatherSide}>
          <div className={s.weatherGradient}>
            <div className={s.dateConteiner}>
              <h2 className={s.dateDay}>{fecha.toDateString()}</h2>
              <div className={s.locationConteiner}>
                <img src="logoUbi.png" alt="" />
                <div className={s.locationName}>
                  <p>
                    {currentCity.name}, {currentCity.country}
                  </p>
                </div>
              </div>
            </div>
            <div className={s.weatherConteiner}>
              <img
                className={s.weatherIcon}
                src={`http://openweathermap.org/img/wn/${currentCity.img}@2x.png`}
                alt={currentCity.name}
              />
              <h1 className={s.weatherTemp}>{currentCity.temp}°C</h1>
              <p className={s.weatherDes}>
                {currentCity.description
                  ? currentCity.description.toUpperCase()
                  : " "}
              </p>
            </div>
          </div>
        </div>
        <div className={s.infoSide}>
          <div div className={s.infoTempConteiner}>
            <div className={s.infoTemp}>
              <span className={s.valueTemp}>{currentCity.min}°</span>
              <span className={s.title}>MIN</span>
            </div>
            <div className={s.infoTemp}>
              <span className={s.valueTemp}>{currentCity.max}°</span>
              <span className={s.title}>MAX</span>
            </div>
          </div>
          <div className={s.info}>
            <span className={s.title}>HUMIDITY</span>
            <span className={s.value}>{currentCity.humidity} %</span>
          </div>
          <div className={s.info}>
            <span className={s.title}>WIND</span>
            <span className={s.value}>{currentCity.wind} km/h</span>
          </div>
          <button className={s.locationButton} onClick={() => openSearch()}>
            Change location
          </button>
        </div>
      </div>
      {open && <Search />}
    </div>
  );
}

export default CurrentCity;
