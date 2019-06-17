import React, { useState } from 'react'
import GoalForm from '../components/goalform'

const Interface = () => {

    const [goalform, setGoalform] = useState(true)

    return <div id='interface'>
        < GoalForm /> 
    </div>

}

export default Interface

