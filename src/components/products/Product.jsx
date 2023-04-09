import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,seller,quantity,price} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>Name : {name}</h6>
        </div>
    );
};

export default Product;