import { Route, Switch } from 'react-router-dom'
import React from 'react'  

import Signup from './components/nonAuth/signup'
import Login from './components/nonAuth/login'
import Interface from './containers/interface'
import Splash from './components/nonAuth/splash'
import Unauthorized from './components/nonAuth/unauthorized'
import AuthRoute from './components/Auth/authroutes'

export const Routes = () => {

    return (
        <Switch>
            <AuthRoute exact path='/dashboard' component={Interface} />
            <Route exact path='/unauthorized' component={Unauthorized}/>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Splash} />
        </Switch>
    )
}