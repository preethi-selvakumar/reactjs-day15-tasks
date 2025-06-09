import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart }) => {
    if (!products.length) return <p>No products match the filter.</p>;

    return (
        <div className="task5-product-list">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
