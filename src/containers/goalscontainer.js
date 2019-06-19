import React, { useState, useContext, useEffect, Fragment } from 'react'
import uuid from 'uuid/v4'
import GoalCard from '../components/goalcard'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import sr from '../scrollreveal'

import { AuthUser } from '../App'


const GoalsContainer = () => {

    const [user, setUser] = useContext(AuthUser)
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
        <List className='goals-container'>
            <h1>Your Goals</h1>
            <Button color='inherit' variant='outlined'>Create New Goal</Button>
                {createGoals()}
        </List>
    </Fragment>
}

export default GoalsContainer