import React, { useState, useContext, useEffect, Fragment } from 'react'
import uuid from 'uuid/v4'
import GoalCard from '../components/goalcard'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import sr from '../scrollreveal'

import { AuthUser } from '../App'
import { ViewState } from '../App'


const GoalsContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)
    const [goals, setGoals] = useState([])

    sr.reveal('ul.goals-container', {duration: 1500})

    useEffect(()=>{
        fetch('http://localhost:3000/goals')
        .then(resp=>resp.json())
        .then((json)=>{
            let dbgoals = json.filter((goal)=>{return goal.user_id === user.id})
            setGoals([...goals, ...dbgoals])
        })
    }, [user])

    const createGoals = () => {
        return goals.map((goal)=>{
            return <GoalCard key={`${goal.id}-${uuid()}`} goal={{...goal}} />
        })
    }

    return <Fragment>
        <h1 style={{gridArea: '1/2/span 3/span 3'}}>Your Goals</h1>
        <Button color='inherit' variant='outlined' className='create-goal' style={{gridArea: '3/3/span 1/span 1'}} onClick={()=>setView('goals-form')}>Create New Goal</Button>
        <List className='goals-container' style={{gridArea: '4/2/span 14/span 3'}}>
                {createGoals()}
        </List>
    </Fragment>
}

export default GoalsContainer