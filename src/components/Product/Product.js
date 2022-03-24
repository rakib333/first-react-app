import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="this is product" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price :${price}</p>
                <p className='product-seller'><small>Manufacturer : {seller}</small></p>
                <p className='product-rate'><small>Ratting :{ratings}</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='product-btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;