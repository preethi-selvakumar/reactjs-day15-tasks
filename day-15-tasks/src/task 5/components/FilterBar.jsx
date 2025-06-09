import React from "react";

const FilterBar = ({
    categories,
    selectedCategory,
    onCategoryChange,
    maxPrice,
    onMaxPriceChange,
}) => {
    return (
        <div className="task5-filter-bar">
            <select
                className="task5-filter-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            <input
                className="task5-filter-select"
                type="number"
                min="0"
                step="0.01"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => onMaxPriceChange(e.target.value)}
            />
        </div>
    );
};

export default FilterBar;
