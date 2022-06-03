import React from "react";
import Card from "../card/Card.jsx";
import s from "./Cards.module.css";

const Cards = ({ cities, onClose }) => {
  console.log("soy cards");
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
            onClose={() => onClose(e.d)}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
};

export default Cards;
