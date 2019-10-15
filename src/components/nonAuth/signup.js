import React, { useState, useContext } from 'react'
import { AuthUser, fetchURL } from '../../App'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import CheckUser from './checkUser'

import { BlurBox } from './blurbox'


const Signup = (props) => {

    const [creds, setCreds] = useState({username: '', password: '', email: '', age: '', location: ''})
    const [snackbar, setSnackbar] = useState(false)
    const [errormessage, setErrormessage] = useState('')

    const [user, setUser] = useContext(AuthUser)

    const handleOnChange = (e) => {
        let newCred = {}
        newCred[e.target.name] = e.target.value
        setCreds({...creds, ...newCred})
    }

    const textStyles = {
        margin: 'normal',
        variant: 'outlined',
    }

    const handleOnClick = (e) => {
        if (e.target.className === 'bg'){
            props.history.push('/')
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch(`${fetchURL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user: {...creds, avatar: `default-prof-pic.png`}
            })
        })
        .then(res=>res.json())
        .then((json)=>{
            if (!json.error){
                setUser(json.user)
                let tmr = new Date(Date.now()+86400000)
                document.cookie=`jwt=${json.jwt}; expires=${tmr}; path-/'`
                props.history.push('/dashboard')
            }
            else{
                setErrormessage(json.error[0])
                setSnackbar(true)
            }
        })
        .catch((errors)=>{console.log(errors)})
    }

    return <div className='splash' onClick={handleOnClick}>
        <img src='./bgr.png' className='bg' alt=''/>
        <Fade in={true} timeout={2000}>
            <BlurBox>
            <h1>Signup</h1><br />
                <form className='signup-form' onSubmit={(e)=>handleOnSubmit(e)}>
                    <TextField label='Username' type='text' value={creds.username} name='username' onChange={handleOnChange} {...textStyles} /><br />
                    <TextField label='Password' type='password' value={creds.password} name='password' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Email' type='text' value={creds.email} name='email' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Age' type='text' value={creds.age} name='age' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Location (Zip Code)' type='text' value={creds.location} name='location' onChange={handleOnChange} {...textStyles}/><br />
                    <Button type='submit' variant='contained' size='large' color='primary'>Submit</Button>
                </form>
                <Snackbar open={snackbar} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={4000} onClose={()=>setSnackbar(false)}>
                    <p className='error'>{errormessage}</p>
                </Snackbar>
                <p>Have an account already? <NavLink to='/login'>Login</NavLink></p>
            </BlurBox>
        </Fade>
        <CheckUser history={props.history} />
    </div>

}

export default Signup;

