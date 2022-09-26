import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import React, { useContext } from "react";
import { Route } from "react-router-dom";
import City from "./components/city/City.jsx";
import CurrentCity from "./components/currentCity/CurrentCity";
import WeatherContext from "./context/WeatherContext";
function App() {
  const { modalOpen } = useContext(WeatherContext);
  return (
    <div className="App">
      <div className="cards">
        <CurrentCity />
      </div>
      <div>
        <Cards />
      </div>

      {modalOpen && <City />}
    </div>
  );
}

export default App;
