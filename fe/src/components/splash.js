import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthUser } from '../App'
import sr from '../scrollreveal'
import Button from '@material-ui/core/Button'



const Splash = (props) => {

    const [user, setUser] = useContext(AuthUser)

    useEffect(()=>{
        for (let n = 0; n < 8; n++){
            sr.reveal(`span.app-name${n}`, {delay: 250*n, duration: 2000})
        }
        
        sr.reveal('button', {delay: 3000, duration: 3000})
    }, [])

    const createTitle = () => {
        let title = ['T', 'e', 'a', 'm', 's', 't', 'e', 'r']
        return title.map((letter, index) => {
            return <span className={`app-name${index}`}>{letter}</span>
        })
    }

    //add state to show "is this not you?"
    //set div 'front-page' to instead switch to showing buttons, login form, signup form
    
    return <div className='splash'>
        <img src='./bgr.png' className='bg' alt=''/>
        <div className='front-page'>
            <h1 className='app-name'>{createTitle()}</h1>
            <p id='m-1'>
                <div>Create</div>
                <div><span>New Relationships</span></div>
            </p><br />
            <p id='m-2'>
                <div>Gain</div>
                <div><span>New Skills</span></div>
            </p><br />
            <p id='m-3'>
                <div>Exceed</div>
                <div><span>Your Expectations</span></div>
            </p><br />
            < Link to='/login'><Button variant='contained' size='large' color='primary'>{`Login`}</Button></Link><br />
            < Link to='/signup'><Button variant='contained' size='large' color='primary'>{`Signup`}</Button></ Link>
        </div>
    </div>
}

export default Splash