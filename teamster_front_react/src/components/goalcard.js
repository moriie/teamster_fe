import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const GoalCard = (props) => {

    return <ListItem id={props.goal.id} button={true}>
        <ListItemText primary={`Description: ${props.goal.description}`} secondary={`Due: ${props.goal.end_date.match(/\S+(?=T)/)} at ${props.goal.end_date.match(/\d{2}:{1}\d{2}/)}`}>
        </ListItemText>
    </ListItem>
}

export default GoalCard