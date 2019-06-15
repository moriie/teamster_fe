import React, { useState, useContext } from 'react'
import { AuthUser } from '../App'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'


const Signup = (props) => {

    const [creds, setCreds] = useState({username: '', password: '', email: '', age: '', location: ''})

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

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user: {...creds, avatar: `https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png`}
            })
        })
        .then(res=>res.json())
        .then((json)=>{
            setUser(json.user)
            let tmr = new Date(Date.now()+86400000)
            document.cookie=`jwt=${json.jwt}; expires=${tmr}; path-/'`
        })

        setCreds({})
        props.history.push('/dashboard')

    }

    return <div className='splash' onClick={handleOnClick}>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <Fade in={true} timeout={2000}>
            <div className='blur-box'>
            <h1>Signup</h1><br />
                <form className='signup-form' onSubmit={(e)=>handleOnSubmit(e)}>
                    <TextField label='Username' type='text' value={creds.username} name='username' onChange={handleOnChange} {...textStyles} /><br />
                    <TextField label='Password' type='password' value={creds.password} name='password' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Email' type='text' value={creds.email} name='email' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Age' type='text' value={creds.age} name='age' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Location (Zip Code)' type='text' value={creds.location} name='location' onChange={handleOnChange} {...textStyles}/><br />
                    <Button variant='contained' size='large' color='primary'><Input type='submit' value='submit'></Input></Button>
                </form>
                <p>Have an account already? <NavLink to='/login'>Login</NavLink></p>
            </div>
        </Fade>
    </div>

}

export default Signup;