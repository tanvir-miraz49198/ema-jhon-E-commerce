import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name,img,seller,ratings,price} = props.product;

    const btnClicked = props.btnClicked;
  


    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='details'>
           <h6 className='product-name'>Name : {name}</h6>
            <p className='price'>Price : ${price}</p>
            <p className='manufacturer'>Manufacturer : {seller}</p>
            <p className='ratings'>Ratings : {ratings} Star</p>
           </div>
           <button onClick={() => btnClicked(props.product)} className='cart-btn'>
            Add To Cart
            <FontAwesomeIcon className='font-awesome' icon={faShoppingCart} />
            </button>
        </div>
        
    );
};

export default Product;