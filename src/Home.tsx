import React, { FC } from 'react';
import Header from './Header';
import Product from './Product';
import './Home.scss';

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Watch the latest TV shows with prime video"
        />

        <div className="home__row">
          <Product
            id="123211341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
          />
          <Product
            id="2"
            title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
            price={28.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
            price={8.83}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
          />
          <Product
            id="4"
            title="Learning React: Functional Web Development with React and Redux Paperback – 1"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
          />
          <Product
            id="5"
            title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
            price={3.49}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)"
            price={7.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
