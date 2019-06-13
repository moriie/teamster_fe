import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUser } from '../App'
import sr from '../scrollreveal'
import Button from '@material-ui/core/Button'



const Splash = (props) => {

    for (let n = 0; n < 8; n++){
        sr.reveal(`span.app-name${n}`, {delay: 250*n, duration: 2000})
    }

    sr.reveal('button', {delay: 2500, duration: 3000})

    const [user, setUser] = useContext(AuthUser)

    const createTitle = () => {
        let title = ['T', 'e', 'a', 'm', 's', 't', 'e', 'r']
        return title.map((letter, index) => {
            return <span className={`app-name${index}`}>{letter}</span>
        })
    }

    //add state to show "is this not you?"
    //set div 'front-page' to instead switch to showing buttons, login form, signup form
    
    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='front-page'>
            {/* <h1 className='app-name'>Teamster</h1> */}
            <h1 className='app-name'>{createTitle()}</h1>
            < Link to='/login'><Button variant='contained' size='large' color='primary'>{`Login`}</Button></Link><br />
            < Link to='/signup'><Button variant='contained' size='large' color='primary'>{`Signup`}</Button></ Link>
        </div>
    </div>
}

export default Splash