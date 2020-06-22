import React, { useState, useEffect } from 'react';
import Title from '../components/Title.js';
import '../styling/Explore.css';
import data from '../data/drinks.json';
import DrinkResults from '../components/DrinkResults';
import { useHistory, useLocation } from 'react-router-dom';

const Explore = (props) => {
    const [hasSearched, setHasSearched] = useState(false);
    const [text, setText] = useState('');
    const [drinks, setDrinks] = useState([]);
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        let searchString = location.search.slice(8);
        searchString && doSearch(searchString)
    }, [location])

    const doSearch = (searchString) => {
        const filteredDrinks = data.cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchString.toLowerCase()));
        setHasSearched(true);
        setDrinks(filteredDrinks);
    }

    const onSearch = (e) => {
        e.preventDefault();
        e.target.elements.searchInput.value = '';
        setText('');
        history.push(`/explore?search=${text}`)
    }

    return (
        <div className='explore'>
            <Title text='Find your favourite drink!' textColor='rgb(150, 62, 185)' />
            <form onSubmit={onSearch}>
                <input type="text" onChange={(e) => setText(e.target.value)} name="searchInput" />
                <button disabled={!text}>Search</button>
            </form>
            {hasSearched && <DrinkResults arrayOfDrinks={drinks} />}
        </div>
    )
}

export default Explore;