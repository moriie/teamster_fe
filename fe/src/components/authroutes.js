import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthUser } from '../App'
import Navbar from '../containers/navbar'
import Modal from '@material-ui/core/Modal'

const AuthRoutes = (props) => {

    const [user, setUser] = useContext(AuthUser)
    const [loading, setloading] = useState(true)

    useEffect(()=> {
        setloading(false)
    }, [])

    if (!!user){
        return <Fragment>
            <Navbar />
            <Route component={props.component} />
            <Modal open={loading}>
                <div>
                    <img src='teamster-logo.png' className='teamster-logo' alt='teamster-logo' />
                    <img src='teamster-name.png' className='teamster-name' alt='teamster-name' />
                </div>
            </Modal>
        </Fragment>
    }
    else{
        return <Redirect to='/unauthorized' /> 
    }

}

export default AuthRoutes