import React from 'react';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className='nav'>
            <img
                className='nav--image'
                src='./assets/header-logo.png'
                alt='Header Logo'
            />
            <h4 className='nav--title'>my travel journal.</h4>
        </nav>
    );
}
