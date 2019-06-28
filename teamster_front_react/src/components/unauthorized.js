import React from 'react'

const Unauthorized = (props) => {

    const redirect = () => {
        setTimeout(()=>{props.history.push('/login')}, 2500)
    }
    
    return <div>
        <h1>Error: please login to your account to view this page.</h1>
        <p>Redirecting...</p>
        {redirect()}
    </div>
}

export default Unauthorized