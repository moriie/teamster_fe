import React from 'react'
import styled from 'styled-components'

const Unauthorized = (props) => {

    const redirect = () => {
        setTimeout(()=>{props.history.push('/login')}, 2000)
    }
    
    return <AuthError>
        <h1>Error: please login to your account to view this page.</h1>
        <p>Redirecting...</p>
        {redirect()}
    </AuthError>
}

export default Unauthorized

const AuthError = styled.div`
    color: black;
`