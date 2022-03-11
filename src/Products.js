import React from 'react';
import product1 from './Assets/Images/product1.jpg';
import './Products.css';
import { useStateValue } from './StateProvider';

function Products({id,title,image,price,rating}) {

  const [state,dispatch] = useStateValue();
  const addToBasket = () =>{  

    dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id:id,
          title:title,
          iamge:image,
          price:price,
          rating:rating

        }
    })
}



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
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
            
        </div>
    </div>
  )
}

export default Products