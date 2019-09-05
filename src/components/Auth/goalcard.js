import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import { fetchURL } from '../../App.js'

const GoalCard = (props) => {

    const [open, setOpen] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const handleRepeat = () => {
        if (props.goal.repeatable){
            return <p>This goal repeats every <b>{handleRepeatLength()}</b></p>
        }
    }

    const handleRepeatLength = () => {
        if (props.goal.time_basis%8760 === 0){
            return `${props.goal.time_basis/8760} year(s).`
        }
        else if (props.goal.time_basis%730 === 0){
            return `${props.goal.time_basis/730} month(s).`
        }
        else if (props.goal.time_basis%168 === 0){
            return `${props.goal.time_basis/168} week(s).`
        }
        else if (props.goal.time_basis%24 === 0){
            return `${props.goal.time_basis/24} day(s).`
        }
        else {
            return `${props.goal.time_basis} hour(s).`
        }
    }

    const handlePartner = () => {
        //TODO: Add partner display logic - if partner, display partner details. If not, query user if they would like to add one.
        return null
    }

    const handleConfirm = () => {
        setConfirm(!confirm)
    }

    return <div>
        <ListItem id={props.goal.id} button={true} onClick={()=>setOpen(true)}>
            <ListItemText primary={`Description: ${props.goal.description}`} secondary={`Due: ${props.goal.end_date.match(/\S+(?=T)/)} at ${props.goal.end_date.match(/\d{2}:{1}\d{2}/)}`}>
            </ListItemText>
        </ListItem>
        <Modal aria-labelledby={props.goal.description} open={open} onClose={()=>setOpen(false)}>
            <div className='goal-box'>
                <h1>{props.goal.description}</h1>
                <p>Due: {`${props.goal.end_date.match(/\S+(?=T)/)} at ${props.goal.end_date.match(/\d{2}:{1}\d{2}/)}`}</p>
                {handleRepeat()}
                {handlePartner()}  
                <Button variant='contained' size='large' color='primary' onClick={null}>Edit Goal</Button>
                <Button variant='contained' size='large' color='primary' onClick={handleConfirm}>Delete Goal</Button>
                <Modal open={confirm}>
                    <div className='confirm-box'>
                        <h2>
                            Are you sure you want to delete this goal?
                        </h2>
                        <span>
                            <Button variant='contained' size='large' color='primary' onClick={()=>props.delete(props.goal.id)}>Yes</Button>
                            <Button variant='contained' size='large' color='primary' onClick={handleConfirm}>No</Button>
                        </span>
                    </div>
                </Modal>
            </div>
        </Modal>
    </div>
}

export default GoalCard