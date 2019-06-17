import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'
import sr from '../scrollreveal'

import { AuthUser } from '../App'

const Navbar = () => {

    const [user, setUser] = useContext(AuthUser)

    console.log(user)
    
    return (
    <div id='navbar'>
        <span> 
            <Fade in={true} timeout={{enter: 2500}}>
                <NavLink to='/'>
                    <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                    <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
                </NavLink>
            </Fade>
            <NavLink to='/' className='navbar-link'>Button 1</NavLink> 
            <NavLink to='/login' className='navbar-link'>Button 2</NavLink> 
            <Avatar src={user.avatar} alt='user-prof-default' className='profile-btn'/> 
        </span>
    </div>)
}

export default Navbar;