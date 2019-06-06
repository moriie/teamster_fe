import React, { useState } from 'react'

const Login = () => {

    const [cred, setCred] = useState({username: '', password: ''})

    const handleOnChange = (e) => {
        let newCred = cred
        newCred[e.target.name] = e.target.value
        setCred(newCred)
    }

    const handleOnSubmit = (e) => {
        // Login to user
        // fetch(URL, {
        //     method: 'POST',
        // })

        setCred({
            username: '',
            password: '',
        })
    }

    return <div className='login-screen'>
        <img src='http://hashtag-bg.com/wp-content/uploads/2018/08/berlin-background-resume-wallpapers-backgrounds.jpg' className='backdrop' alt=''/>
        <div className='blur-box'>
            <form onSubmit={handleOnSubmit} className='login-form'>
                <label>Username</label><br />
                <input type='text' value={cred.username} name='username' onChange={handleOnChange} /><br />
                <label>Password</label> <br />
                <input type='password' value={cred.password} name='password' onChange={handleOnChange} /><br />
                <input type='submit' value='submit' />
            </form>
        </div>
    </div>

}

export default Login 