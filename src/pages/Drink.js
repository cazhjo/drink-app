import React, { useState, useEffect } from 'react';
import data from '../data/drinks.json';
import '../styling/Drink.css'

const Drink = (props) => {
    const drink = data.cocktails.find(x => x.name === props.match.params.id)

    return (
        <div className='drink-page'>
            <h3>{drink.name}</h3>
            <p>{drink.preparation}</p>
            <img src={drink.image} alt={drink.name} />
        </div>
    )
}

export default Drink;