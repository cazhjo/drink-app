import React from 'react';
import DrinkCard from './DrinkCard'
import '../styling/DrinkResults.css'

const DrinkResults = ({ arrayOfDrinks }) => {
    const handleArray = () => {
        if (arrayOfDrinks.length > 0) {
            return arrayOfDrinks.map(x => <DrinkCard key={x.name} name={x.name} image={x.image} />);
        }
        else{
            return <h3>Cocktail could not be found</h3>
        }
    }

    return (
        <div className='drink-results'>
            {handleArray()}
        </div>
    )
}

export default DrinkResults;