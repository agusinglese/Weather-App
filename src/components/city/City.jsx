import React from "react";
import s from "./City.module.css";
import { useParams } from "react-router-dom";

const City = ({ city }) => {
  let param = useParams();
  console.log(param);

  return (
    <div className={s.ciudad}>
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} °C</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}°</div>
          <div>Longitud: {city.longitud}°</div>
        </div>
      </div>
    </div>
  );
};

export default City;
