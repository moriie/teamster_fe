import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
    <div id='navbar'>
        <h1>Navbar</h1>
        <span> 
            <img src='' name='teamster-logo' alt='' />
            <NavLink to='/'>Button 1</NavLink> 
            <NavLink to='/login'>Button 2</NavLink> 
            <NavLink>Button 3</NavLink> 
            <NavLink>Button 4</NavLink> 
            <NavLink>Button 5</NavLink>
            <img src='https://pm1.narvii.com/7127/78ea6e082f2e9848ce81c0edbab1e6c4b279d85ar1-712-608v2_128.jpg' alt='' className='profile-btn'/> 
        </span>
    </div>)
}

export default Navbar;