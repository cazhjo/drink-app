import React from 'react';
import '../styling/Home.css';
import image from '../assets/images/landing-page-img.png'

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to the Cocktail Explorer!</h1>
            <img src={image} />
        </div>
    )
}

export default Home