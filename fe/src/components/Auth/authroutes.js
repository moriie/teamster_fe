import React, { useState, useEffect, useContext, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthUser } from '../../App'
import Navbar from '../../containers/navbar'
import Modal from '@material-ui/core/Modal'

const AuthRoutes = (props) => {

    const [user, setUser] = useContext(AuthUser)
    const [loading, setloading] = useState(true)

    useEffect(()=> {
        if (!!user.username){
            setTimeout(()=>setloading(false), 500)
        }
    }, [user])

    if (!!document.cookie){
        return <Fragment>
            <Navbar />
            <Route component={props.component} />
            <Modal open={loading}>
                <div className='loading'>
                    <img src='teamster-logo.png' className='loading-logo' alt='teamster-logo' />
                    <p className='loading-message'>Loading...</p>
                </div>
            </Modal>
        </Fragment>
    }
    else{
        return <Redirect to='/unauthorized' /> 
    }

}

export default AuthRoutes