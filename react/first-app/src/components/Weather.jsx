import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ weather: "", temp: "" });
  const [isvisible, setIsvisible] = useState(false);
  return (
    <div className="login">
      <span>Get Weather of your city</span>
      <form
        action=""
        method="get"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          let key = process.env.REACT_APP_KEY;
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
          axios.get(url).then((response) => {
            setWeatherData({
              weather: response.data.weather[0].description,
              temp: response.data.main.temp - 273,
            });
            console.log(response.data);
          });

          setIsvisible(true);
          // setAllData([data]);
          console.log();
        }}
      >
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input type="submit" value="fetch weather"></input>
      </form>
      {isvisible && (
        <div>
          <span className="city">City: {city}</span>
          <br />
          <span className="Weather">Weather: {weatherData.weather}</span>
          <br />
          <span className="Tempreture">
            Tempreture: {Math.round(weatherData.temp)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Weather;
