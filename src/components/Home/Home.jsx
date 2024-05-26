import React from 'react';
import  './Home.css';
import photo from './photo.jpg';

const Home = () => {
    return (
        <>
          <div className="home">

            <h1 className='home__title'>Варвара Когут</h1>
            <p className="home__descr">17 лет, Ярославль, начинающая программистка, крутая барабанщица и хороший человек</p>
            <img src={photo} alt="это я" className="home__photo" />
          </div>
        </>
    );
}

export default Home;
