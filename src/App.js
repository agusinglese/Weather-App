import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards/Cards.jsx";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import City from "./components/city/City.jsx";

function App() {
  const [cities, setCities] = useState([]);

  const onClose = (id) => {
    cities.filter((oldCities) => oldCities.filter((e) => e.id !== id));
  };

  //onSearch hace la peticion a la api
  const onSearch = (city) => {
    let apiKey = "02e65d3c82d882a97d09edc3fd351d0f";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.main !== undefined) {
          let city = {
            max: Math.round(data.main.temp_max),
            min: Math.round(data.main.temp_min),
            name: data.name,
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };

          setCities((oldCities) => [...oldCities, city]);
        } else alert("Ciudad no encontrada");
      });
  };

  const onFilter = (ciudadId) => {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId)); //se hace el parseInt pq params lo devuelve como str
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        element={<Cards cities={cities} onClose={onClose} />}
      />
      <Route exact path={"/ciudad/:ciudadId"} element={<City />} />
    </Routes>
  );
}

export default App;
