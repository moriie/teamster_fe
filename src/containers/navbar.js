import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import sr from '../scrollreveal'

import { AuthUser } from '../App'

const Navbar = () => {

    const [user, setUser] = useContext(AuthUser)

    console.log(user)

    sr.reveal('.nav-title', {duration: 5000})
    
    return (
    <div id='navbar'>
        <h1 className='nav-title'>Navbar</h1>
        <span> 
            <img src='' name='teamster-logo' alt='' />
            <NavLink to='/goal/create'>Button 1</NavLink> 
            <NavLink to='/login'>Button 2</NavLink> 
            {/* <NavLink>Button 3</NavLink>  */}
            {/* <NavLink>Button 4</NavLink>  */}
            {/* <NavLink>Button 5</NavLink> */}
            <img src={user.avatar} alt='user-prof-default' className='profile-btn'/> 
        </span>
    </div>)
}

export default Navbar;