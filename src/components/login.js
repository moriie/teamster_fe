import React, { useState, useContext } from 'react'
import { AuthUser } from '../App'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useContext(AuthUser)


    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
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

    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
            <h1>Teamster</h1><br />
            <form onSubmit={(e)=>handleOnSubmit(e)} className='login-form'>
                <label>Username</label><br />
                <input type='text' value={username} name='username' onChange={e=>setUsername(e.target.value)} /><br />
                <label>Password</label> <br />
                <input type='password' value={password} name='password' onChange={e=>setPassword(e.target.value)} /><br />
                <input type='submit' value='submit' />
            </form>
        </div>
    </div>

}

export default Login 