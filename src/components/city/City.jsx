import React, { useContext } from "react";
import s from "./City.module.css";
import { useParams } from "react-router-dom";
import WeatherContext from "../../context/WeatherContext";

const City = () => {
  const { onFilter, onOpen, modalCityId, onCloseModal } =
    useContext(WeatherContext);
  let { ciudadId } = useParams();

  let city = onFilter(modalCityId);

  return (
    <div className={s.modal}>
      <div className={s.conteiner}>
        <div className={s.weatherSide}>
          <div className={s.weatherGradient}>
            <h1>{city.name}</h1>
            <h1 className={s.weatherTemp}>{city.temp}°C</h1>
            <img
              className={s.weatherIcon}
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
              alt={city.name}
            />
            <p className={s.weatherDes}>
              {city.description ? city.description.toUpperCase() : " "}
            </p>
          </div>
        </div>
        <div className={s.infoSide}>
          <div className={s.info}>
            <span className={s.title}>Viento:</span>{" "}
            <span className={s.value}>{city.wind} km/h</span>
          </div>
          <div className={s.info}>
            <span className={s.title}>Cantidad de nubes:</span>{" "}
            <span className={s.value}>{city.clouds}</span>
          </div>

          <div className={s.info}>
            <span className={s.title}>Latitud:</span>{" "}
            <span className={s.value}>{city.latitud}°</span>
          </div>
          <div className={s.info}>
            <span className={s.title}>Longitud:</span>{" "}
            <span className={s.value}>{city.longitud}°</span>
          </div>
        </div>
        <button className={s.locationButton} onClick={() => onCloseModal()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default City;
