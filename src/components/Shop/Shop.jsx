import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../products/Product';
import Cart from '../Cart/Cart';
const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const btnClicked = (product) => {
        let newCart = [...cart, product];
        setCart(newCart)

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        btnClicked={btnClicked}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>

                <Cart
                cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;