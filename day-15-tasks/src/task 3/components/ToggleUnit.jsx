import React from "react";
import { useUnit } from "./UnitContext";

const ToggleUnit = () => {
    const { unit, toggleUnit } = useUnit();

    return (
        <button onClick={toggleUnit} className="task3-toggle-btn">
            Switch to {unit === "metric" ? "°F" : "°C"}
        </button>
    );
};

export default ToggleUnit;
