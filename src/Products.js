import React from 'react';
import product1 from './Assets/Images/product1.jpg';
import './Products.css';

function Products() {
  return (
    <div className="product">
        <div className="product__info">
            <p>ECHOGEAR On-Wall Surge Protector with 6 Pivoting AC Outlets </p>
            <p className="product__price">
              <small>$</small>
              <strong>19.99</strong>
            </p>
            <div className="product__rating">
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
            <img src={product1}/>
            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Products