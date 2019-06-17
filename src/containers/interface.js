import React, { useState } from 'react'
import GoalForm from '../components/goalform'
import GoalsContainer from './goalscontainer'


const Interface = () => {

    const [goalform, setGoalform] = useState(true)

    return <div id='interface'>
        <GoalsContainer/>
        {/* < GoalForm />  */}
    </div>

}

export default Interface

