import React from 'react'
import { Link } from 'react-router-dom'

const Splash = () => {

    
    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
            < Link to='/login'>Login</ Link>
            < Link to='/signup'>Signup</ Link>
        </div>
    </div>
}

export default Splash