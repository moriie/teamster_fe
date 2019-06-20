import React, { useContext } from 'react'
import { Route, withRouter } from 'react-router-dom'
import GoalForm from '../components/goalform'
import GoalsContainer from './goalscontainer'
import Main from './main'
import NetworkContainer from './networkcontainer'
import NetworkForm from '../components/networkform'

import { ViewState } from '../App'

const Interface = () => {

    const [view, setView] = useContext(ViewState)

    const handleView = () => {
        switch (view) {
            case 'goals-container':
                return <Route component={GoalsContainer} />
            break;
            case 'goals-form':
                return <Route component={GoalForm} />
            break;
            case 'network-container':
                return <Route component={NetworkContainer} />
            break;
            case 'network-form':
                return <Route component={NetworkForm} />
            break;
            default:
                return <Route component={Main} />
        }
    }

    return <div id='interface'>
        {handleView()}
    </div>

}

export default withRouter(Interface)

