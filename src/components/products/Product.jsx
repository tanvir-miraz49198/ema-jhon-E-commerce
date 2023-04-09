import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,seller,ratings,price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='details'>
           <h6 className='product-name'>Name : {name}</h6>
            <p className='price'>Price : ${price}</p>
            <p className='manufacturer'>Manufacturer : {seller}</p>
            <p className='ratings'>Ratings : {ratings} Star</p>
           </div>
           <button className='cart-btn'>Add To Cart</button>
        </div>
        
    );
};

export default Product;