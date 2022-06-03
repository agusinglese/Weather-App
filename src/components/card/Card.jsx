import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ onClose, min, max, name, id, img, temp }) => {
  return (
    <div>
      <button classNAme={s.searchBtn} onClick={onClose}>
        X
      </button>
      <div>
        <Link to={`/ciudad/${id}`}>
          <h4>
            {name} {temp}
          </h4>
        </Link>
      </div>
      <div>
        <div>
          <span>Min</span>
          <span>{min}°</span>
        </div>
        <div>
          <span>Max</span>
          <span>{max}°</span>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Card;
