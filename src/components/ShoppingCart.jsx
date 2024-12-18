import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
        </div>
    );
};

export default ShoppingCart;
