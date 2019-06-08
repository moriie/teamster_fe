import React, { useReducer } from 'react'

const Signup = () => {

    const [cred, dispatchcred] = useReducer(rootReducer, {username: '', password: '', email: '', age: '', location: ''})

    const handleOnChange = (e) => {
        let newCred = cred
        newCred[e.target.name] = e.target.value
        setCred(newCred)
    }

    const handleOnSubmit = (e) => {
        fetch('http:')
        setCred({
            username: '',
            password: '',
        })
    }

    return <form className='signup-form'>
        <label>Username</label><br />
        <input type='text' value={cred.username} name='username' onChange={handleOnChange} /><br />
        <label>Password</label> <br />
        <input type='password' value={cred.password} name='password' onChange={handleOnChange} /><br />
        <label>Email</label> <br />
        <input type='email' value={cred.email} name='email' onChange={handleOnChange} /><br />
        <input type='submit' value='submit' />
    </form>

}

export default Signup;