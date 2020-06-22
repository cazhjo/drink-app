import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css'

const Header = () => (
    <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
    </div>
)

export default Header;