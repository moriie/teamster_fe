import React, { useState, useContext, useEffect } from 'react'
import uuid from 'uuid/v4'
import GoalCard from '../components/goalcard'
import List from '@material-ui/core/List'

import { AuthUser } from '../App'


const GoalsContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [goals, setGoals] = useState([])


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

    return <List className='goals-container'>
            {createGoals()}
    </List>

}

export default GoalsContainer