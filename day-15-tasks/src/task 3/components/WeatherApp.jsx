import React, { useState, useEffect } from "react";
import { UnitProvider, useUnit } from "./UnitContext";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import ToggleUnit from "./ToggleUnit";
import { useFetchWeather } from "../hooks/useFetchWeather";

const WeatherAppContent = () => {
    const [city, setCity] = useState("");
    const { unit } = useUnit();
    const { data, loading, error } = useFetchWeather(city, unit);

    useEffect(() => {
        if (!city) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=YOUR_OPENWEATHERMAP_API_KEY`
                    )
                        .then((res) => res.json())
                        .then((json) => setCity(json.name))
                        .catch(() => { });
                },
                () => { }
            );
        }
    }, [city, unit]);

    return (
        <div className="task3-weather-app">
            <h1>Weather App</h1>
            <ToggleUnit />
            <WeatherForm onSearch={setCity} />
            {loading && <div className="task3-loader">Loading...</div>}
            {error && <div className="task3-error">{error}</div>}
            {data && <WeatherInfo weatherData={data} unit={unit} />}
        </div>
    );
};

const WeatherApp = () => (
    <UnitProvider>
        <WeatherAppContent />
    </UnitProvider>
);

export default WeatherApp;
