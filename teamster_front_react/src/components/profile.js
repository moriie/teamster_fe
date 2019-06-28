import React, { useState, useContext, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Edit from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

import { AuthUser } from '../App'
import { ViewState } from '../App'

const Profile = (props) => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)
    // const [display, setDisplay] = useState({})

    // const pathID = props.location.pathname.match(/\d+/)[0]

    // useEffect(()=> {
    //     if (pathID !== user.id){
    //         fetch('http://localhost:3000/users')
    //         .then(res=>res.json())
    //         .then(json=>setDisplay(
    //             json.find(user=>{
    //                 return user.id == pathID
    //             })
    //         ))
    //     }
    //     else{
            // setDisplay(user)
    //     }
    // }, [])

    return <div className='profile-page home'>
        {/* <Avatar src={display.avatar} alt='user-profile-pic' style={{width: '100%', height: '100%', gridArea: '1/3/span 4/ span 1'}} className='profile-btn'/>
        <h1 style={{gridArea: '5/3/span 1/ span 1'}}>{display.username}</h1>
        <p style={{gridArea: '6/3/span 1/ span 1'}}>{display.age} years old</p>
        <h2 style={{gridArea: '7/3/span 1/ span 1'}}>About me</h2>
        <p style={{gridArea: '8/3/span 3/ span 2'}}>{display.bio}</p> */}
        <IconButton onClick={()=>setView('edit-profile')} style={{gridArea: '1/5/span 1/span 1', width: '25%', right: '-75%'}}>
            <Edit style={{fontSize: '48px'}}/>
        </IconButton>
        <Avatar src={user.avatar} alt='user-profile-pic' style={{width: '100%', height: '100%', gridArea: '1/3/span 4/ span 1'}} className='profile-btn'/>
        <h1 style={{gridArea: '5/3/span 1/ span 1'}}>{user.username}</h1>
        <p style={{gridArea: '6/3/span 1/ span 1'}}>{user.age} years old</p>
        <h2 style={{gridArea: '7/3/span 1/ span 1'}}>About me</h2>
        <p style={{gridArea: '8/3/span 3/ span 2'}}>{user.bio}</p>
    </div>

}

export default Profile