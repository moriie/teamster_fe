import React, { useState, useContext } from 'react'
import { AuthUser, fetchURL } from '../../App'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CheckUser from './checkUser'
import Snackbar from '@material-ui/core/Snackbar'

import { BlurBox } from './blurbox'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [snackbar, setSnackbar] = useState(false)

    const [user, setUser] = useContext(AuthUser)

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

        fetch(`${fetchURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user:{
                    username: username,
                    password: password
                }
            })
        })
        .then(res=>{
            if (res.ok){
                return res.json()
            }
            else{
                setSnackbar(true)
            }
        })
        .then(json=>{
            if (snackbar === false){
                setUser({...user, ...json.user})
                let tmr = new Date(Date.now()+86400000)
                document.cookie=`jwt=${json.jwt}; expires=${tmr}; path-/`
                props.history.push('/dashboard')
            }
            else{
                return null;
            }
        })
        .catch(()=>console.log('Error, try again.'))    
    }

    return <div className='splash' onClick={handleOnClick}>
        <img src='./bgr.png' className='bg' alt=''/>
        <Fade in={true} timeout={2000}>
            <BlurBox>
                <h1>Login</h1><br />
                <form onSubmit={(e)=>handleOnSubmit(e)} className='login-form'>
                    <TextField label='Username' type='text' value={username} name='username' onChange={e=>setUsername(e.target.value)} {...textStyles}/><br />
                    <TextField label='Password' type='password' value={password} name='password' onChange={e=>setPassword(e.target.value)} {...textStyles}/><br />
                    <Button type='submit' variant='contained' size='large' color='primary'>Submit</Button>
                </form>
                <Snackbar open={snackbar} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={4000} onClose={()=>setSnackbar(false)}>
                    <p className='error'>Incorrect username/password. Please try again.</p>
                </Snackbar>
                <p>Don't have an account? <NavLink to='/signup'>Signup</NavLink></p>
            </BlurBox>
        </Fade>
        <CheckUser history={props.history} />
    </div>
}

export default Login 