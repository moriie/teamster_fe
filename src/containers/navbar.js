import React, { useState } from 'react'

const Navbar = () => {

    const [display, setDisplay] = useState(true);

    return (
    <div id='navbar'>
        <h1>Navbar</h1>
        <span> 
            <img src='' name='teamster-logo' alt='' />
            <button>Button 1</button> 
            <button>Button 2</button> 
            <button>Button 3</button> 
            <button>Button 4</button> 
            <button>Button 5</button>
            <img src='https://pm1.narvii.com/7127/78ea6e082f2e9848ce81c0edbab1e6c4b279d85ar1-712-608v2_128.jpg' alt='' className='profile-btn'/> 
        </span>
    </div>)
}

export default Navbar;