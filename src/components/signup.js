import React, { useState, useContext } from 'react'
import { AuthUser } from '../App'

const Signup = (props) => {

    const [creds, setCreds] = useState({})

    const [user, setUser] = useContext(AuthUser)

    const handleOnChange = (e) => {
        let newCred = {}
        newCred[e.target.name] = e.target.value
        setCreds({...creds, ...newCred})
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

    return <div className='splash'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='bg' alt=''/>
        <div className='blur-box'>
        <h1>Signup</h1><br />
            <form className='signup-form' onSubmit={(e)=>handleOnSubmit(e)}>
                <label>Username</label><br />
                <input type='text' value={creds.username} name='username' onChange={handleOnChange} /><br />
                <label>Password</label> <br />
                <input type='password' value={creds.password} name='password' onChange={handleOnChange} /><br />
                <label>Email</label> <br />
                <input type='text' value={creds.email} name='email' onChange={handleOnChange} /><br />
                <label>Age</label> <br />
                <input type='text' value={creds.age} name='age' onChange={handleOnChange} /><br />
                <label>Location</label> <br />
                <input type='text' value={creds.location} name='location' onChange={handleOnChange} /> <br />
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


    //Split states below. Changed 6/12/2019 to object state.

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState('')
    // const [location, setLocation] = useState('')

        // setUsername('')
        // setPassword('')
        // setEmail('')
        // setAge('')
        // setLocation('')


                // user: {
                //     username: username,
                //     password: password,
                //     email: email,
                //     age: age,
                //     location: location,
                    // avatar: `https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png`
                // }