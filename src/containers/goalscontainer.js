import React, { useState, useContext, useEffect, Fragment } from 'react'
import uuid from 'uuid/v4'
import GoalCard from '../components/Auth/goalcard'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'

import styled from 'styled-components'

import { AuthUser, ViewState, fetchURL } from '../App'


const GoalsContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)
    const [goals, setGoals] = useState([])

    useEffect(()=>{
        fetch(`${fetchURL}/goals`)
        .then(resp=>resp.json())
        .then((json)=>{
            let dbgoals = json.filter((goal)=>{return goal.user_id === user.id})
            setGoals([...goals, ...dbgoals])
        })
    }, [user])

    const createGoals = () => {
        return goals.map((goal)=>{
            return <GoalCard key={`${goal.id}-${uuid()}`} goal={{...goal}} delete={handleDelete} edit={handleEdit}/>
        })
    }
    
    const handleDelete = (id) => {

        let newGoals = goals.filter(goal=>{
            return goal.id !== id
        })

        fetch(`${fetchURL}/goals/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": document.cookie,
            }
        })

        setGoals(newGoals)
        
    }

    const handleEdit = (goal) => {
        fetch(`${fetchURL}/goals`)
        .then(resp=>resp.json())
        .then((json)=>{
            let dbgoals = json.filter((goal)=>{return goal.user_id === user.id})
            setGoals(dbgoals)
        }) 
    }

    return <Fragment>
        <h1 style={{gridArea: '1/2/span 3/span 3'}}>Your Goals</h1>
        <Button color='inherit' variant='outlined' className='create-goal' style={{gridArea: '3/3/span 1/span 1'}} onClick={()=>setView('goals-form')}>Create New Goal</Button>
        <Fade in={true} timeout={1500}>
        <List className='goals-container' style={{gridArea: '4/2/span 14/span 3'}}>
                {createGoals()}
        </List>
        </Fade>
    </Fragment>
}

export default GoalsContainer

