import React, { Fragment, useState, useContext } from 'react'
import { AuthUser } from '../App'

const GoalForm = () => {

    const [goal, setGoal] = useState({num: '1', interval: ''})
    const [user, setUser] = useContext(AuthUser)

    const handleOnSubmit = (e) => {

        e.preventDefault()
        
        let time_basis = parseInt(goal.num) * parseInt(goal.interval)

        fetch('http://localhost:3000/goals', {
            method: 'post',
            headers: {
                "Authorization": document.cookie,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                goal: {
                    description: goal.description,
                    repeatable: goal.repeatable,
                    time_basis: time_basis,
                    user_id: user.id
                }
            })
        })
        .then(res=>res.json())
        .then(console.log)
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
                <select name="interval" value={goal.interval} onChange={handleOnChange} defaultValue=''>
                    <option value=''>Select Interval</option>
                    <option value='1'>Hour(s)</option>
                    <option value='24'>Day(s)</option>
                    <option value='168'>Week(s)</option>
                    <option value='730'>Month(s)</option>
                    <option value='8760'>Year(s)</option>
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
                case '1':
                    n=12
                break;
                case '24':
                    n=31
                break;
                case '168':
                    n=52
                break;
                case '730':
                    n=12
                break;
                case '8760':
                    n=12
                break;
                default: n=12
            }
            for (let a = 1; a <= n; a++){
                optionsArr.push(<option value={a}>{a}</option>)
            }
            return (                 
                <select name="num" value={goal.num} onChange={handleOnChange} defaultValue='1'>
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
        <select name="repeatable" value={goal.repeatable} onChange={handleOnChange} defaultValue={false}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select><br />
        {showTimeBasis()}
        {/* Add Calendar Dropdown here? "Select When To Begin" */}
        <input type='submit' value='submit' />
    </form>
}

export default GoalForm