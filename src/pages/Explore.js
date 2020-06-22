import React, { useState } from 'react';
import Title from '../components/Title.js';
import '../styling/Explore.css';

const Explore = () => {
    const [text, setText] = useState();
    
    const onSearch = () => {
        console.log(text);
    }

    return (
        <div className='explore'>
            <Title text='Find your favourite drink!' textColor='rgb(150, 62, 185)' />
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={onSearch}>Search</button>
        </div>
    )
}

export default Explore;