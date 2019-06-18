import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import sr from '../scrollreveal'

import { AuthUser } from '../App'
import { ViewState } from '../components/home'

const Navbar = () => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

    return (
    <div id='navbar'>
        <span> 
            <NavLink to='/'>
                <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                <Fade in={true} timeout={2000}>
                    <IconButton>
                        <CalendarIcon style={{fontSize: 48}}/>
                    </IconButton>
                </Fade>
                <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
            </NavLink>
            {/* <NavLink to='/' className='navbar-link'>Button 1</NavLink>  */}
            {/* <NavLink to='/login' className='navbar-link'>Button 2</NavLink>  */}
            <Avatar src={user.avatar} alt='user-prof-default' className='profile-btn'/> 
        </span>
    </div>)
}

export default Navbar;