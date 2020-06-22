import React from 'react';
import '../styling/Home.css';
import Title from '../components/Title.js';
import image from '../assets/images/landing-page-img.png';

const Home = () => {
    return (
        <div className='home'>
            <Title text='Welcome to The Cocktail Explorer' textColor='rgb(62, 62, 185)' />
            <img src={image} alt='home '/>
        </div>
    )
}

export default Home