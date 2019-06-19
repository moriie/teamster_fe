import React, { useContext } from 'react'
import GoalForm from '../components/goalform'
import GoalsContainer from './goalscontainer'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Main from './main'

import { ViewState } from '../components/home'

const Interface = () => {

    const [view, setView] = useContext(ViewState)

    const handleView = () => {
        switch(view) {
            case 'goals-container':
                return <GoalsContainer />
            break;
            case 'goals-form':
                return <GoalForm />
            break;
            default:
                return <Main />
        }
    }

    return <div id='interface'>
        <Card>
            <CardContent>
                {/* <CardHeader title='Hello'>
                </CardHeader> */}
                Create Goal?
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                
            </CardContent>
        </Card>
        {handleView()}
    </div>

}

export default Interface

