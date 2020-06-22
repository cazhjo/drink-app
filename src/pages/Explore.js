import React, { useState, useEffect } from 'react';
import Title from '../components/Title.js';
import '../styling/Explore.css';
import data from '../data/drinks.json';
import DrinkResults from '../components/DrinkResults';
import { useHistory, useLocation } from 'react-router-dom';

const Explore = (props) => {
    const [hasSearched, setHasSearched] = useState(false);
    const [drinks, setDrinks] = useState();
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        let searchString = location.search.slice(8);
        doSearch(searchString)
    }, [location])

    const doSearch = (searchString) => {
        if(searchString){
            const filteredDrinks = data.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchString));
            setHasSearched(true);
            setDrinks(filteredDrinks);
        }
        else{
            setDrinks([]);
            setHasSearched(false);
        }
    }

    const onSearch = (e) => {
        e.preventDefault();
        let text = e.target.elements.searchInput.value;
        e.target.elements.searchInput.value = '';
        history.push(`/explore?search=${text}`)
    }

    return (
        <div className='explore'>
            <Title text='Find your favourite drink!' textColor='rgb(150, 62, 185)' />
            <form onSubmit={onSearch}>
                <input type="text" name="searchInput" />
                <button>Search</button>
            </form>
            {hasSearched && <DrinkResults arrayOfDrinks={drinks} />}
        </div>
    )
}

export default Explore;