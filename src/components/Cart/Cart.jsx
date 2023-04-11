import React from 'react';
import './Cart.css'
import Product from '../products/Product';
const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
     total = total + product.price * product.quantity;
     shipping = shipping + product.shipping;
     quantity = quantity + product.quantity;
    }

    const tax = total*7/100;
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6>Grand Total : ${grandTotal}</h6>
        </div>
    );
};

export default Cart;