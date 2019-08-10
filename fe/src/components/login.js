import React, { useState, useContext } from 'react'
import { AuthUser, fetchURL } from '../App'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        .then(res=>res.json())
        .then((json)=>{
            setUser(json.user)
            let tmr = new Date(Date.now()+86400000)
            document.cookie=`jwt=${json.jwt}; expires=${tmr}; path-/`
        })
        
        
        setUsername('')
        setPassword('')

        props.history.push('/dashboard')

    }

    return <div className='splash' onClick={handleOnClick}>
        <img src='./bgr.png' className='bg' alt=''/>
        <Fade in={true} timeout={2000}>
            <div className='blur-box' {...props}>
                <h1>Login</h1><br />
                <form onSubmit={(e)=>handleOnSubmit(e)} className='login-form'>
                    <TextField label='Username' type='text' value={username} name='username' onChange={e=>setUsername(e.target.value)} {...textStyles}/><br />
                    <TextField label='Password' type='password' value={password} name='password' onChange={e=>setPassword(e.target.value)} {...textStyles}/><br />
                    <Button variant='contained' size='large' color='primary'><Input type='submit' value='submit'></Input></Button>
                </form>
                <p>Don't have an account? <NavLink to='/signup'>Signup</NavLink></p>
            </div>
        </Fade>
    </div>
}

export default Login 