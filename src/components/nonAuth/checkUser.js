import React, { useState, useEffect, useContext } from 'react'  
import Modal from '@material-ui/core/Modal'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import { AuthUser } from '../../App'

const CheckUser = (props) => {
    
    const [user, setUser] = useContext(AuthUser)
    
    const [modal, setModal] = useState(false)

    useEffect(()=>{
        if (!!user.username){
            setModal(true)
        }
    }, [user])

    const handleOnClick = () => {
        setUser({})
        setModal(false)
    }

    return (
            <Modal open={modal}>
                <div className='visited'>
                    <Avatar src={user.avatar} />
                    <p>{user.username}</p>
                    <p>Welcome back! Is this you?</p>
                    <Button variant='contained' size='large' color='primary' onClick={()=>{props.history.push('/dashboard')}}>Yes</Button>
                    <Button variant='contained' size='large' color='primary' onClick={handleOnClick}>No</Button>
                </div>
            </Modal>
    )
}

export default CheckUser