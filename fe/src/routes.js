import { Route, Switch } from 'react-router-dom'
import React from 'react'  

import Signup from './components/signup'
import Login from './components/login'
import Interface from './containers/interface'
import Splash from './components/splash'
import Unauthorized from './components/unauthorized'
import AuthRoute from './components/authroutes'
import Profile from './components/profile'

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