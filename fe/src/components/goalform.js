import React, { Fragment, useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { DateTimePicker } from '@material-ui/pickers';

import { ViewState } from '../App'
import { AuthUser } from '../App'

const GoalForm = () => {

    const [goal, setGoal] = useState({repeatable: false, num: '1', interval: '1'})
    const [goaldate, setGoaldate] = useState(new Date())
    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

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
                    user_id: user.id,
                    end_date: goaldate,
                }
            })
        })
        .then(()=>setView('goals-container'))
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
                <label>Every... </label><br />
                {createTime()}
                <FormControl>
                    <Select id='interval' name="interval" value={goal.interval} onChange={handleOnChange}>
                        <MenuItem value='1'>Hour(s)</MenuItem>
                        <MenuItem value='24'>Day(s)</MenuItem>
                        <MenuItem value='168'>Week(s)</MenuItem>
                        <MenuItem value='730'>Month(s)</MenuItem>
                        <MenuItem value='8760'>Year(s)</MenuItem>
                    </Select>
                </FormControl><br />
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
                optionsArr.push(<MenuItem value={a}>{a}</MenuItem>)
            }
            return <FormControl> 
                <Select id='num' name="num" value={goal.num} onChange={handleOnChange}>
                {optionsArr}
                </Select>
            </FormControl>
        }
    }

    return <div id='goalform' style={{gridArea: '1/3/span 10/span 1'}}>
        <h1>Goalform</h1>
        <form onSubmit={handleOnSubmit}>
        <label>Description</label> <br />
        <TextField multiline={true} rows={12} variant={'filled'} value={goal.description} onChange={handleOnChange} name='description' className='textarea'/> <br />
            <label>Due Date?</label><br />
            <DateTimePicker id='end_date' format='LLL' value={goaldate} name='end_date' onChange={(e)=>setGoaldate(e._d)}/> <br />
        <FormControl>
            <InputLabel htmlFor='repeat'>Repeat?</InputLabel>
            <Select id='repeat' name="repeatable" value={goal.repeatable} onChange={handleOnChange}>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
            </Select>
        </FormControl><br />
        {showTimeBasis()}
        <Button type='submit' value='submit' variant='outlined'>Submit</Button>
        </form>
    </div>
}

export default GoalForm