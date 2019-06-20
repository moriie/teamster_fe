import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const GoalCard = (props) => {


    return <ListItem id={props.goal.id} button={true}>
        <ListItemText>
            {props.goal.description}
        </ListItemText>
    </ListItem>
}

export default GoalCard