import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
        </div>
    );
};

export default Header;