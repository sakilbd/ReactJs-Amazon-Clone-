import React from 'react';
import product1 from './Assets/Images/product1.jpg';
import './Products.css';

function Products({title,image,price,rating}) {
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill().map((_,i)=>(
                      <p>⭐</p>
              ))}
             
              
            </div>
            <img src={image} alt=""/>
            <div className="add__to__basket__button">
                <button>Add to Basket</button>
            </div>
            
        </div>
    </div>
  )
}

export default Products