import { createContext, useState } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [currentCity, setCurrentCity] = useState({});

  const searchLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
    });
  };

  const onSearchCurrentCity = (latitude, longitude) => {
    console.log(latitude, longitude);
    let apiKey = "56f5814e67dcc083eacd3a0ab04dd261";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          let city = {
            country: data.sys.country,
            max: Math.round(data.main.temp_max),
            min: Math.round(data.main.temp_min),
            name: data.name,
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: Math.round(data.main.temp),
            weather: data.weather[0].main,
            description: data.weather[0].description,
            clouds: data.clouds.all,
            humidity: data.main.humidity,
          };
          setCurrentCity(city);
        } else alert("Ciudad no encontrada");
      });
  };

  const data = {
    location,
    currentCity,
    searchLocation,
    onSearchCurrentCity,
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export { LocationProvider };

export default LocationContext;
