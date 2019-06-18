import { Route, Switch } from 'react-router-dom'
import React from 'react'  

import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Splash from './components/splash'
import Unauthorized from './components/unauthorized'
import AuthRoute from './components/authroutes'


export const Routes = () => {
    return (
        <Switch>
            <AuthRoute path='/dashboard' component={Home} />
            <Route exact path='/unauthorized' component={Unauthorized}/>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Splash} />
        </Switch>
    )
}