import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthUser } from '../App'

const AuthRoutes = (props) => {

    const [user, setUser] = useContext(AuthUser)

    if (!!document.cookie){
        return <Route component={props.component} />
    }
    else{
        return <Redirect to='/unauthorized' /> 
    }

}

export default AuthRoutes