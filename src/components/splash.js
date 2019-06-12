import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUser } from '../App'



const Splash = (props) => {

    const [user, setUser] = useContext(AuthUser)

    //add state to show "is this not you?"
    
    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
            < Link to='/login'>Login</ Link><br />
            < Link to='/signup'>Signup</ Link>        
        </div>
    </div>
}

export default Splash