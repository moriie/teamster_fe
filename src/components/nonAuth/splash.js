import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import uuid from 'uuid/v4'
import CheckUser from './checkUser'

import styled from 'styled-components'


const Splash = (props) => {

    const createTitle = () => {
            let title = ['T', 'e', 'a', 'm', 's', 't', 'e', 'r']

            return title.map((letter, index) => {
                return <Fade in={true} key={`${index}-${uuid()}`} timeout={{enter: 2000}} style={{transitionDelay: `${250*index}ms`}}><span>{letter}</span></Fade>
            })        
    }

    const visited1 = () => {
        return localStorage.getItem("visited") == 1 ? '0ms' : '3000ms'
    }
    
    return <div className='splash'>
        <img src='./bgr.png' className='bg' alt=''/>
        <div className='front-page'>
            <h1 className='app-name'>{createTitle()}</h1>
            <TextSlide>
                <div>Create</div>
                <div><span>New Relationships</span></div>
            </TextSlide><br />
            <TextSlide>
                <div>Gain</div>
                <div><span>New Skills</span></div>
            </TextSlide><br />
            <TextSlide>
                <div>Exceed</div>
                <div><span>Your Expectations</span></div>
            </TextSlide><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/login'><Button variant='contained' size='large' color='primary'>{`Login`}</Button></Link></Fade><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/signup'><Button variant='contained' size='large' color='primary'>{`Signup`}</Button></ Link></Fade>
            < CheckUser history={props.history} />
        </div>
    </div>
}

export default Splash

const TextSlide = styled.div`
    font-size: 1.67vw;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;

    div:first-of-type {
        animation: sub-reveal 7s 3s 1 both;
    }

    div:last-of-type {
        width: 0;
        animation: full-reveal 8s 3s 1 both;   
    }

    div:last-of-type span {
        margin-left: -25vw;
        animation: left-swoop 7s 3s 1 both;
    }

    @keyframes sub-reveal {
        0% {opacity: 0;}
        20% {opacity: 1;}
        100% {opacity: 1;}
    }

    @keyframes left-swoop {
        0% {margin-left: -67vw;}
        20% {margin-left: -67vw;}
        35% {margin-left: 0;}
        100% {margin-left: 0;}
    }

    @keyframes full-reveal {
        0% {opacity: 0; width: 0;}
        20% {opacity: 1; width: 0;}
        30% {width: 15vw}
        100% {opacity: 1; width: 15vw;}
    }
`