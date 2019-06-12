import React, { Fragment, useState, useContext } from 'react'
import { AuthUser } from '../App'

const GoalForm = () => {

    const [goal, setGoal] = useState({})
    const [user, setUser] = useContext(AuthUser)

    const handleOnSubmit = (e) => {
        
        e.preventDefault()

        fetch('http://localhost:3000/goals', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': document.cookie
            },
            body: JSON.stringify({
                goal: {
                    description: goal.description,
                    repeatable: goal.repeatable,
                    time_basis: `${goal.num} ${goal.interval}`,
                    user_id: user.id
                }
            })
        
        })
    }

    const handleOnChange = (e) => {
        let newGoal = {}
        newGoal[e.target.name] = e.target.value
        setGoal({...goal, ...newGoal})
    }

    const showTimeBasis = () => {
        if (!!goal.repeatable){
            return <Fragment>
                <label>How often would you like to repeat this goal?</label> <br />
                <label>Every </label>
                {createTime()}
                <select name="interval" value={goal.interval} onChange={handleOnChange}>
                    <option value=''>Select Interval</option>
                    <option value='hour'>Hour(s)</option>
                    <option value='day'>Day(s)</option>
                    <option value='week'>Week(s)</option>
                    <option value='month'>Month(s)</option>
                    <option value='year'>Year(s)</option>
                </select><br />
                </Fragment>
        }
        else{
            goal.time_basis = ''
        }
    }

    const createTime = () => {
        if (!!goal.interval){
        let n;
            let optionsArr = []
            switch (goal.interval){
                case 'hour':
                    n=12
                break;
                case 'day':
                    n=31
                break;
                case 'week':
                    n=52
                break;
                case 'month':
                    n=12
                break;
                case 'year':
                    n=12
                break;
                default: n=12
            }
            for (let a = 1; a <= n; a++){
                optionsArr.push(<option value={a}>{a}</option>)
            }
            return (                 
                <select name="num" value={goal.num} onChange={handleOnChange}>
                {optionsArr}
                </select>
            )
        }
    }

    console.log(goal)

    return <form onSubmit={handleOnSubmit}>
        <label>Description</label> <br />
        <textarea value={goal.description} onChange={handleOnChange} name='description' placeholder='Enter Goal Description.' className='textarea'/> <br />
        <label>Do you want to repeat this goal?</label><br />
        <select name="repeatable" value={goal.repeatable} onChange={handleOnChange}>
            <option value={true}>Yes</option>
            <option value={false} selected>No</option>
        </select><br />
        {showTimeBasis()}
        {/* Add Calendar Dropdown here? "Select When To Begin" */}
        <input type='submit' value='submit' />
    </form>
}

export default GoalForm