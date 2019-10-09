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
import Profile from '../components/Auth/profile'

import styled from 'styled-components'

import { AuthUser } from '../App'
import { ViewState } from '../App'

const Navbar = (props) => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

    const [menuState, setmenuState] = useState(false)

    return (
    <Fade in={true} timeout={2000}>
        <NavbarWrapper>
            <span> 
                <NavLink to='/'>
                    <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                    <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
                </NavLink>
                <Tooltip title='Home'>
                    <IconButton className='nav-btn' onClick={()=>setView('')}>
                            <HomeIcon />
                    </IconButton>
                </Tooltip >
                <Tooltip title='View Calendar'>
                    <IconButton className='nav-btn' onClick={()=>setView('calendar')}>
                        <CalendarIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='View Goals'>
                    <IconButton className='nav-btn' onClick={()=>setView('goals-container')}>
                        <ListIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Your Network'>
                    <IconButton className='nav-btn'>
                        <NetworkIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Your Partners'>
                    <IconButton className='nav-btn'>
                        <FriendIcon />
                    </IconButton>
                </Tooltip>
                <IconButton className='profile-btn' onClick={()=>setmenuState(!menuState)}>
                    <Avatar src={user.avatar} alt='user-profile-pic'/>
                </IconButton>
                <ClickAwayListener onClickAway={()=>setmenuState(!menuState)}>
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
        </NavbarWrapper>
    </Fade>
    )
}

export default withRouter(Navbar);

const NavbarWrapper = styled.div`
    position: relative;
    box-shadow: 0px 8px 4px #333;
    background-color: rgb(128, 60, 48);

    a.active button {
        margin-top: .5vh;
        float: left;
        color: whitesmoke;
    }

    .MuiAvatar-root {
        width: 3.5vw;
        height: 7vh;
    }

    div.MuiTooltip-popper .MuiTooltip-tooltip{
        margin-top: 0;
        font-size: 1vw;
    }

    div.profile-menu{
        color: whitesmoke;
        background-color: hsla(213, 20%, 36%, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.753);
        border-radius: 5px;
    }

    .profile-btn {
        float: right;
        padding: 0;
        margin: .5vh .5vw;
        width: 64px;
        height: 64px;
    }

    svg.MuiSvgIcon-root{
        color: rgb(179, 153, 153);
        font-size: 3.25vw;
    }
`