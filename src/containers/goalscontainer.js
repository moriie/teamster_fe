import React, { useState, useContext } from 'react'
import { AuthUser } from '../App'

const GoalsContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [goals, setGoals] = useState([])

    fetch('http://localhost:3000/goals')
    .then(resp=>resp.json())
    .then(json=>{
        setGoals(json.filter((goal)=>{
            return goal.user_id === user.id
        }
        ))
    })


    return <div>
    </div>

}

export default GoalsContainer