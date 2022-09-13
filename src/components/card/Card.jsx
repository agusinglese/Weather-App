import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  onClose,
  min,
  max,
  name,
  id,
  img,
  temp,
  description,
  onOpen,
}) => {
  return (
    <div className={s.conteiner}>
      <button className={s.searchBtn} onClick={onClose}>
        X
      </button>
      <div className={s.cityName}>
        <h2>{name}</h2>
      </div>
      <div className={s.boxTemp}>
        <img
          className={s.imgCard}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={name}
        />
        <div>
          <h1 className={s.temp}>{Math.round(temp)}°C</h1>
          <p className={s.desc}>{description.toUpperCase()}</p>
        </div>
      </div>

      <button onClick={() => onOpen(true)} className={s.detail}>
        View details &gt;&gt;
      </button>
    </div>
  );
};

export default Card;
