import React, { useState, useReducer, useContext } from 'react'
import { AuthUser } from '../App'
import rootReducer from '../reducers/rootreducer'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')

    const [credentials, setCredentials] = useContext(AuthUser)

    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${credentials.jwt}`

            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    email: email,
                    age: age,
                    location: location
                }
            })
        })
        .then(res=>res.json())
        .then((json)=>{setCredentials({...credentials, user: json})})

        setUsername('')
        setPassword('')
        setEmail('')
        setAge('')
        setLocation('')
    }

    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
        <h1>Signup</h1><br />
            <form className='signup-form' onSubmit={(e)=>handleOnSubmit(e)}>
                <label>Username</label><br />
                <input type='text' value={username} name='username' onChange={e=>setUsername(e.target.value)} /><br />
                <label>Password</label> <br />
                <input type='password' value={password} name='password' onChange={e=>setPassword(e.target.value)} /><br />
                <label>Email</label> <br />
                <input type='text' value={email} name='email' onChange={e=>setEmail(e.target.value)} /><br />
                <label>Age</label> <br />
                <input type='text' value={age} name='age' onChange={e=>setAge(e.target.value)} /><br />
                <label>Location</label> <br />
                <input type='text' value={location} name='location' onChange={e=>setLocation(e.target.value)} /> <br />
                <input type='submit' value='submit' />
            </form>
        </div>
    </div>

}

export default Signup;




    // const [cred, setCred] = useState({username: '', password: '', email: '', age: '', location: ''})
    
    // const [user, dispatchuser] = useReducer(rootReducer, {username: '', password: '', email: '', age: '', location: ''})

    // const handleOnChange = (e) => {
    //     let newCred = cred
    //     newCred[name] = value
    //     setCred(newCred)
    // }