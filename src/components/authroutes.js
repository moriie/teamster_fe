import React, { useContext, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthUser } from '../App'
import Navbar from '../containers/navbar'

const AuthRoutes = (props) => {

    const [user, setUser] = useContext(AuthUser)

    if (!!user){
        return <Fragment>
            <Navbar />
            <Route component={props.component} />
        </Fragment>
    }
    else{
        return <Redirect to='/unauthorized' /> 
    }

}

export default AuthRoutes