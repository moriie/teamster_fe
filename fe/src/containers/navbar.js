import React, { useState, useContext } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
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
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Profile from '../components/profile'

import { AuthUser } from '../App'
import { ViewState } from '../App'

const Navbar = (props) => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

    const [menuState, setmenuState] = useState(false)

    return (
    <Fade in={true} timeout={2000}>
        <div id='navbar'>
            <span> 
                <NavLink to='/'>
                    <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                    <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
                </NavLink>
                <Tooltip title='Home'>
                    <IconButton id='home' onClick={()=>setView('')}>
                            {/* <HomeIcon style={{fontSize: 48}} /> */}
                            <HomeIcon />
                    </IconButton>
                </Tooltip >
                <Tooltip title='View Calendar'>
                    <IconButton>
                        <CalendarIcon style={{fontSize: 48}} />
                    </IconButton>
                </Tooltip>
                <Tooltip title='View Goals'>
                    <IconButton onClick={()=>setView('goals-container')}>
                        <ListIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Your Network'>
                    <IconButton>
                        <NetworkIcon />
                    </IconButton>
                </Tooltip>
                    <Tooltip title='Your Partners'>
                    <IconButton>
                        <FriendIcon />
                    </IconButton>
                </Tooltip>
                <IconButton className='profile-btn' style={{float: 'right', padding: 0, margin: '.5% .5%', width: '64px', height: '64px'}} onClick={()=>setmenuState(!menuState)}>
                    <Avatar src={user.avatar} alt='user-profile-pic'/>
                </IconButton>
                <ClickAwayListener onClickAway={()=>setmenuState(false)}>
                    <Popper open={menuState} placement='bottom-start' anchorEl={document.querySelector('img.MuiAvatar-img')} className='profile-menu'>
                        <MenuList>
                            <MenuItem onClick={()=>setView('profile-page')}>
                                Profile
                            </MenuItem>
                            <MenuItem>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Popper>
                </ClickAwayListener>
            </span>
        </div>
    </Fade>
    )
}

export default withRouter(Navbar);