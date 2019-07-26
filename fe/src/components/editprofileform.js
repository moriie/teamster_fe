import React, { useState, useContext } from 'react'
import { AuthUser, fetchURL } from '../App'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'


const EditProfileForm = (props) => {

    const [user, setUser] = useContext(AuthUser)

    const [creds, setCreds] = useState(user)

    const handleOnChange = (e) => {
        let newCred = {}
        newCred[e.target.name] = e.target.value
        setCreds({...creds, ...newCred})
    }

    const textStyles = {
        margin: 'normal',
        variant: 'outlined',
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch(`${fetchURL}/users`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                user: {...creds}
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

    return (
        <Fade in={true} timeout={2000}>
            <div className='blur-box'>
                <h1>Edit Profile</h1><br />
                <form className='signup-form' onSubmit={(e)=>handleOnSubmit(e)}>
                    <TextField label='Username' type='text' value={creds.username} name='username' onChange={handleOnChange} {...textStyles} /><br />
                    {/* <TextField label='Password' type='password' value={creds.password} name='password' onChange={handleOnChange} {...textStyles}/><br /> */}
                    <TextField label='Email' type='text' value={creds.email} name='email' onChange={handleOnChange} {...textStyles}/><br />
                    {/* <TextField label='Age' type='text' value={creds.age} name='age' onChange={handleOnChange} {...textStyles}/><br /> */}
                    <TextField label='Biography' type='text' value={creds.location} name='biography' onChange={handleOnChange} {...textStyles}/><br />
                    <TextField label='Location (Zip Code)' type='text' value={creds.location} name='location' onChange={handleOnChange} {...textStyles}/><br />
                    <Button variant='contained' size='large' color='primary'><Input type='submit' value='submit'></Input></Button>
                </form>
            </div>
        </Fade>
    )
}

export default EditProfileForm;