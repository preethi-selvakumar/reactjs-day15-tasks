import { useState, useEffect } from "react";

const API_KEY = "2d55ea157f63c1a4a8c986c41245b47d"; 

export const useFetchWeather = (city, unit) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        setLoading(true);
        setError(null);

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        )
            .then((res) => {
                if (!res.ok) throw new Error("City not found");
                return res.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [city, unit]);

    return { data, loading, error };
};
