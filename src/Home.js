import React from 'react';
import './Home.css';
import IMG from './Assets/Images/home1.gif';
import Products from './Products';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img className="home__image" src={IMG} alt=""/>

          <div className="home__row">
              <Products title="ECHOGEAR On-Wall Surge Protector with 6 Pivoting AC Outlets"
              image="https://m.media-amazon.com/images/I/61FKUFQ7XiS._AC_SX679_.jpg"
              price={179}
              rating={5}
              />
              <Products/>
              
              
          </div>
          <div className="home__row">
              <Products/>
              <Products/>
              <Products/>
          </div>
          <div className="home__row">
               <Products/>
          </div>
        </div>

    </div>
  )
}

export default Home;