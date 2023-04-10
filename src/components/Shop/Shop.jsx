import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../products/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        // step 1 : ( get id )
        for(const id in storedCart){
            console.log(id)
            // step 2 : get products by using id
            const saveProducts = products.find(products => products.id === id)

            if(saveProducts){

            // step 3 : get quantity of the product
            const quantity =  storedCart[id];
            saveProducts.quantity = quantity;
            savedCart.push(saveProducts)
            console.log(saveProducts)
            }
        }
        setCart(savedCart)
    }, [products])





    const btnClicked = (product) => {
        let newCart = [...cart, product];
        setCart(newCart)

        addToDb(product.id)

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
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;