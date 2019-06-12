import { Route, Switch } from 'react-router-dom'
import React from 'react'  

import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Splash from './components/splash'
// import GoalForm from './components/goalform'


export const Routes = () => {
    return (
        <Switch>
            {/* <Route exact path='/goal/create' component={GoalForm} */}
            <Route exact path='/dashboard' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Splash} />
        </Switch>
    )
}