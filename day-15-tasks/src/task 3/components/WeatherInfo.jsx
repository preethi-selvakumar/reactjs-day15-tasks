import React from "react";

const WeatherInfo = ({ weatherData, unit }) => {
    if (!weatherData) return null;

    const tempUnit = unit === "metric" ? "°C" : "°F";

    return (
        <div className="task3-weather-info">
            <h2>{weatherData.name}, {weatherData.sys?.country}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp)} {tempUnit}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Condition: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default WeatherInfo;
