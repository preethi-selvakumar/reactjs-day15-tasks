import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import CartList from "./CartList";
import FilterBar from "./FilterBar";

const initialProducts = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99 },
    { id: 2, name: "Bluetooth Headphones", category: "Electronics", price: 59.99 },
    { id: 3, name: "Coffee Mug", category: "Kitchen", price: 10.0 },
    { id: 4, name: "Desk Lamp", category: "Furniture", price: 35.5 },
    { id: 5, name: "Yoga Mat", category: "Fitness", price: 20.0 },
    { id: 6, name: "Water Bottle", category: "Fitness", price: 15.25 },
    { id: 7, name: "Notebook", category: "Stationery", price: 5.99 },
    { id: 8, name: "Office Chair", category: "Furniture", price: 120.0 },
];

const categories = ["All", "Electronics", "Kitchen", "Furniture", "Fitness", "Stationery"];

const ProductApp = () => {
    const [products] = useState(initialProducts);
    const [cart, setCart] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchesCategory =
                filterCategory === "All" ? true : p.category === filterCategory;
            const matchesPrice =
                maxPrice === "" ? true : p.price <= parseFloat(maxPrice);
            return matchesCategory && matchesPrice;
        });
    }, [products, filterCategory, maxPrice]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <div className="task5-product-app">
            <h1>Ecommerce Product List</h1>

            <FilterBar
                categories={categories}
                selectedCategory={filterCategory}
                onCategoryChange={setFilterCategory}
                maxPrice={maxPrice}
                onMaxPriceChange={setMaxPrice}
            />

            <ProductList products={filteredProducts} onAddToCart={addToCart} />

            <div className="task5-cart-section">
                <h2 className="task5-cart-header">Shopping Cart</h2>
                <CartList cart={cart} />
                <div className="task5-cart-total">
                    Total: ${totalPrice.toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default ProductApp;
