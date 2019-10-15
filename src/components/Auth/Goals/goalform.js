import React, { Fragment, useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { DateTimePicker } from '@material-ui/pickers';

import { ViewState, AuthUser, fetchURL } from '../../../App'

const GoalForm = (props) => {

    const [goal, setGoal] = useState({repeatable: false, num: '1', interval: '1'})
    const [goaldate, setGoaldate] = useState(new Date())
    const [user, setUser] = useContext(AuthUser)
    const [view, setView] = useContext(ViewState)

    useEffect(()=> {
        if (props.goal){
            setGoal({...goal, ...props.goal})
        }
    }, [])

    const handleOnSubmit = (e) => {

        e.preventDefault()
        
        let time_basis = parseInt(goal.num) * parseInt(goal.interval)

        if (!props.goal){ 
            fetch(`${fetchURL}/goals`, {
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
        else {
            fetch(`${fetchURL}/goals/${props.goal.id}`, {
                method: 'PUT',
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
            .then(()=>props.edit())
            .then(()=>props.close())
        }
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


    //TODO: Ask user if they would like to add or search for a partner at this time or not.
    return <FormWrapper>
        <h1>{props.goal ? 'Edit Goal' : 'Create New Goal'}</h1>
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
    </FormWrapper>
}

export default GoalForm

//----Styles----//

const FormWrapper = styled.div`
    grid-area: 1/3/span 10/span 1;

    .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-formControl.MuiInputBase-multiline.MuiFilledInput-multiline{
        background-color: rgba(0, 0, 0, 0.200);
        margin-bottom: 10px;
    }

    .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-formControl.MuiInputBase-multiline.MuiFilledInput-multiline:hover{
        background-color: rgba(0, 0, 0, 0.300);
    }

    .MuiInputBase-root:hover{
        background-color: rgba(0, 0, 0, 0.100);
    }

    .MuiInputBase-input{
        background-color: rgba(0, 0, 0, 0);
    }

    .MuiSelect-select{
        border: 1px solid black;
        border-radius: 3px;
        width: 4vw;
    }

    div .MuiInput-underline:before{
        display: none;
    }

    div.MuiFormControl-root{
        margin-bottom: 10px;
    }

    .MuiInputLabel-root{
        margin-left: 5px;
        color: white;
    }

    .MuiInputLabel-shrink{
        margin-left: 0px;
    }

    span.MuiButton-label{
        color: white;
    }

    button {
        border: 1px solid black;
    }

    #end_date {
        border: 1px solid black;
        border-radius: 3px;
        margin-left: 2px;
        width: 13.5vw;
        text-align: center;
    }
`