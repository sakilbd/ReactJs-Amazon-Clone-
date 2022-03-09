import React from 'react';
import './Home.css';
import IMG from './Assets/Images/home1.gif';
import Products from './Products';

function Home() {
  return (
    <div className="home">
        <div className="home__container"></div>
        <img className="home__image" src={IMG} alt=""/>

        <div className="home__row">
            <Products/>
            <Products/>
            
        </div>
        <div className="home__row">
        </div>
        <div className="home__row">
        </div>

    </div>
  )
}

export default Home;