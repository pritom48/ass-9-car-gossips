import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
            <a href="/home">Home</a>
            <a href="/reviews">Reviews</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/blogs">Blogs</a>
        </div>
    );
};

export default Header;