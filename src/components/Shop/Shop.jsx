import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../products/Product';
const Shop = () => {

    const [products,setProducts] = useState([]);

    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const btnClicked = (product) => {
        let newCart = [...cart , product];
        setCart(newCart)

            }

    return (
        <div className='shop-container'>
            <div className='product-container'>

{
    products.map(product => <Product
    key = {product.id}
    product = {product}
    btnClicked = {btnClicked}
    ></Product>)
}
            
            </div>
            <div className='cart-container'>
         <h4>Order summary</h4>
             <p>Selected Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;