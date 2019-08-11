import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import uuid from 'uuid/v4'


const Splash = () => {

    const createTitle = () => {
            let title = ['T', 'e', 'a', 'm', 's', 't', 'e', 'r']

            return title.map((letter, index) => {
                return <Fade in={true} key={`${index}-${uuid()}`} timeout={{enter: 2000}} style={{transitionDelay: `${250*index}ms`}}><span>{letter}</span></Fade>
            })        
    }

    const visited1 = () => {
        return localStorage.getItem("visited") == 1 ? '0ms' : '3000ms'
    }

    //add state to show "is this not you?"
    //set div 'front-page' to instead switch to showing buttons, login form, signup form
    
    return <div className='splash'>
        <img src='./bgr.png' className='bg' alt=''/>
        <div className='front-page'>
            <h1 className='app-name'>{createTitle()}</h1>
            <div id='m-1' className='subtitle'>
                <div>Create</div>
                <div><span>New Relationships</span></div>
            </div><br />
            <div id='m-2' className='subtitle'>
                <div>Gain</div>
                <div><span>New Skills</span></div>
            </div><br />
            <div id='m-3' className='subtitle'>
                <div>Exceed</div>
                <div><span>Your Expectations</span></div>
            </div><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/login'><Button variant='contained' size='large' color='primary'>{`Login`}</Button></Link></Fade><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/signup'><Button variant='contained' size='large' color='primary'>{`Signup`}</Button></ Link></Fade>
        </div>
    </div>
}

export default Splash