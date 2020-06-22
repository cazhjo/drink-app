import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/DrinkCard.css'

const DrinkCard = ({ name, image }) => {
    return (
        <div className='drink-card'>
            <Link to={`/drink/${name}`}>Name: {name}</Link>
            <img src={image} alt={name} />
        </div>
    )
}

export default DrinkCard;