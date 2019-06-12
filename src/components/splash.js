import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUser } from '../App'



const Splash = (props) => {

    const [user, setUser] = useContext(AuthUser)

    //add state to show "is this not you?"

    const checkCookies = () => {
        if (!!document.cookie){
            fetch('http://localhost:3000/', {
                headers: {
                    "Authorization": document.cookie.split('=')[1]
                }
            })
            .then(res=>res.json())
            .then(json=>setUser({...json.user}))
            
            props.history.push('/dashboard')
        }
        else {
            return <Fragment>
                < Link to='/login'>Login</ Link><br />
                < Link to='/signup'>Signup</ Link>
            </Fragment>
        }
    }

    
    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
            {checkCookies()}
        </div>
    </div>
}

export default Splash