import React from "react";

const CartList = ({ cart }) => {
    if (!cart.length) return <p>Your cart is empty.</p>;

    return (
        <ul className="task5-cart-list">
            {cart.map(({ id, name, quantity, price }) => (
                <li key={id} className="task5-cart-item">
                    <span>
                        {name} x {quantity}
                    </span>
                    <span>${(price * quantity).toFixed(2)}</span>
                </li>
            ))}
        </ul>
    );
};

export default CartList;
