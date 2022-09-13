import React, { useContext } from "react";
import WeatherContext from "../../context/WeatherContext.js";
import Card from "../card/Card.jsx";
import s from "./Cards.module.css";

const Cards = () => {
  const { cities, onClose, onOpen } = useContext(WeatherContext);
  if (cities ? (Array.isArray(cities) ? cities.length : false) : false) {
    return (
      <div className={s.card}>
        {cities.map((e) => (
          <Card
            name={e.name}
            max={e.max}
            min={e.min}
            img={e.img}
            id={e.id}
            key={e.id}
            temp={e.temp}
            description={e.description}
            onClose={() => onClose(e.id)}
            onOpen={() => onOpen(e.id)}
          />
        ))}
      </div>
    );
  }
};

export default Cards;
