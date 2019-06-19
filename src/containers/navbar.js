import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Fade from '@material-ui/core/Fade'
import IconButton from '@material-ui/core/IconButton'
import CalendarIcon from '@material-ui/icons/CalendarTodayRounded'
import HomeIcon from '@material-ui/icons/HomeRounded'
import ListIcon from '@material-ui/icons/ListAltRounded'
import FriendIcon from '@material-ui/icons/PersonRounded'
import NetworkIcon from '@material-ui/icons/PeopleRounded'
import Tooltip from '@material-ui/core/Tooltip'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Popper from '@material-ui/core/Popper'

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
                    <Tooltip title='Home'>
                        <IconButton onClick={()=>setView('')}>
                                <HomeIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip >
                    <Tooltip title='View Calendar'>
                        <IconButton>
                            <CalendarIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='View Goals'>
                        <IconButton>
                            <ListIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Your Network'>
                        <IconButton>
                            <NetworkIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                        <Tooltip title='Your Partners'>
                        <IconButton>
                            <FriendIcon style={{fontSize: 48}} />
                        </IconButton>
                    </Tooltip>
                </NavLink>
                <IconButton style={{float: 'right', padding: 0, margin: '.5% .5%', width: '64px', height: '64px'}} onClick={()=>setmenuState(!menuState)}>
                    <Avatar src={user.avatar} alt='user-prof-default' className='profile-btn'/>
                </IconButton>
                <Popper open={menuState} placement='bottom-start' anchorEl={document.querySelector('img.MuiAvatar-img')} className='profile-menu'>
                    <MenuList>
                        <MenuItem>
                            Profile
                        </MenuItem>
                        <MenuItem>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Popper>
            </span>
        </div>
    </Fade>
    )
}

export default Navbar; 