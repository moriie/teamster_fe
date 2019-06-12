import React, { useState } from 'react'
import GoalForm from '../components/goalform'

const Interface = () => {

    const [goalform, setGoalform] = useState(true)

    return <div>
        {/* <button onClick={()=>setGoalform(!goalform)}>Goalform</button> */}
        <h1>Goalform</h1>
        < GoalForm /> 
    </div>

}

export default Interface