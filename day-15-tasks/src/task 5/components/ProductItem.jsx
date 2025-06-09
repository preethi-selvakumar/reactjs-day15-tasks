import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <div className="task5-product-item">
            <div className="task5-product-name">{product.name}</div>
            <div className="task5-product-category">{product.category}</div>
            <div className="task5-product-price">${product.price.toFixed(2)}</div>
            <button
                className="task5-add-btn"
                onClick={() => onAddToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
