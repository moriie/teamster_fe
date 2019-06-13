import React, { useState } from 'react'
import GoalForm from '../components/goalform'

const Interface = () => {

    const [goalform, setGoalform] = useState(true)

    return <div>
        <h1>Goalform</h1>
        < GoalForm /> 
    </div>

}

export default Interface