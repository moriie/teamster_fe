import React from 'react'
import ListItem from '@material-ui/core/ListItem'

const GoalCard = (props) => {


    return <ListItem id={props.goal.id} button={true}>
        {props.goal.description}
    </ListItem>
}

export default GoalCard