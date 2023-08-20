import React, { useState } from 'react';

const ProductPage = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 15 },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    return (
        <div>
            <h1>Product Page</h1>
            <div className="products">
                {products.map(product => (
                <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
  );
};

export default ProductPage;