import React from 'react';
import './Cart.css'
import Product from '../products/Product';
const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
     total = total + product.price;
     shipping = shipping + product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : ${grandTotal}</h6>
        </div>
    );
};

export default Cart;