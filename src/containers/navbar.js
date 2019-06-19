import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import CalendarIcon from '@material-ui/icons/CalendarTodayRounded'
import HomeIcon from '@material-ui/icons/HomeRounded'
import ListIcon from '@material-ui/icons/ListAltRounded'
import FriendIcon from '@material-ui/icons/PersonRounded'
import Tooltip from '@material-ui/core/Tooltip'
import sr from '../scrollreveal'

import { AuthUser } from '../App'
import { ViewState } from '../components/home'

const Navbar = () => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

    const [menuState, setmenuState] = useState(false)

    console.log(menuState)

    return (
    <Fade in={true} timeout={2000}>
        <div id='navbar'>
            <span> 
                <NavLink to='/'>
                    <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                    <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
                    <Tooltip transitionComponent='zoom' title='Home'>
                        <IconButton>
                                <HomeIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip >
                    <Tooltip transitionComponent='zoom' title='Calendar'>
                        <IconButton>
                            <CalendarIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip transitionComponent='zoom' title='View Goals'>
                        <IconButton>
                            <ListIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                        <Tooltip transitionComponent='zoom' title='Friends'>
                        <IconButton>
                            <FriendIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                </NavLink>
                <Avatar src={user.avatar} alt='user-prof-default' className='profile-btn' />
            </span>
        </div>
    </Fade>
    )
}

export default Navbar; 