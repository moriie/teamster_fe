import React from 'react'

const Signup = () => {

    

    return <form className='signup-form'>
        <label>Username</label><br />
        <input type='text' value={cred.username} name='username' onChange={handleOnChange} /><br />
        <label>Password</label> <br />
        <input type='password' value={cred.password} name='password' onChange={handleOnChange} /><br />
        <input type='submit' value='submit' />
    </form>

}

export default Signup;