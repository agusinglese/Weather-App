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
      <Route exact path="/">
        <CurrentCity />
      </Route>

      <Route exact path="/">
        <Cards />
      </Route>
      <Route exact path="/">
        {modalOpen && <City />}
      </Route>
    </div>
  );
}

export default App;
