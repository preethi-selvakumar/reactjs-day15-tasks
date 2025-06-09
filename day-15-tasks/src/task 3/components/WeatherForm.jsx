import React, { useState } from "react";

const WeatherForm = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch(city.trim());
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit} className="task3-weather-form">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="task3-weather-input"
            />
            <button type="submit" className="task3-weather-btn">
                Search
            </button>
        </form>
    );
};

export default WeatherForm;
