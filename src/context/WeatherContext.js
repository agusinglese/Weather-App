import { createContext, useState } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCityId, setCityModalId] = useState("");

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((e) => e.id !== id));
  };

  const onOpen = (id) => {
    setModalOpen(true);
    setCityModalId(id);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };
  const handleAddCity = (city) => {
    if (!cities.find((element) => element.name === city.name)) {
      setCities((oldCities) => [...oldCities, city]);
    } else {
      return alert("City already added");
    }
  };

  //onSearch hace la peticion a la api
  const onSearch = (city) => {
    let apiKey = "56f5814e67dcc083eacd3a0ab04dd261";
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
            description: data.weather[0].description,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          handleAddCity(city);
        } else alert("Ciudad no encontrada");
      });
  };

  //ciudadIs se obtiene de match.params.ciudad
  const onFilter = (ciudadId) => {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId)); //se hace el parseInt pq params lo devuelve como str
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  };

  const data = {
    onFilter,
    onSearch,
    onOpen,
    onClose,
    handleAddCity,
    onCloseModal,
    cities,
    modalOpen,
    modalCityId,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
