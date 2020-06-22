import React, {useState, useEffect} from 'react';
import data from '../data/drinks.json';

const Drink = (props) => {
    const drink = data.cocktails.find(x => x.name === props.match.params.id)

    return(
        <img src={drink.image} />
    )
}

export default Drink;