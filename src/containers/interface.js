import React, { useContext } from 'react'
import GoalForm from '../components/goalform'
import GoalsContainer from './goalscontainer'
import Main from './main'
import NetworkContainer from './networkcontainer'
import NetworkForm from '../components/networkform'

import { ViewState } from '../components/home'

const Interface = () => {

    const [view, setView] = useContext(ViewState)

    const handleView = () => {
        switch (view) {
            case 'goals-container':
                return <GoalsContainer />
            break;
            case 'goals-form':
                return <GoalForm />
            break;
            case 'network-container':
                return <NetworkContainer />
            break;
            case 'network-form':
                return <NetworkForm />
            break;
            default:
                return <NetworkForm />
        }
    }

    return <div id='interface'>
        {handleView()}
    </div>

}

export default Interface

