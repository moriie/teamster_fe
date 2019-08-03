import React, { useContext } from 'react'
import { Route, withRouter } from 'react-router-dom'
import GoalForm from '../components/goalform'
import GoalsContainer from './goalscontainer'
import Main from './main'
import NetworkContainer from './networkcontainer'
import NetworkForm from '../components/networkform'
import Profile from '../components/profile'
import EditProfileForm from '../components/editprofileform'
import Calendar from '../components/calendar'

import { ViewState } from '../App'

const Interface = () => {

    const [view, setView] = useContext(ViewState)
 
    const handleView = () => {
        switch (view) {
            case 'calendar':
                return <Route component={Calendar} />
            break;
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
            case 'edit-profile':
                return <Route component={EditProfileForm} />
            break;
            case 'profile-page':
                return <Route component={Profile} />
            default:
                return <Route component={Main} />
        }
    }

    return <div className='home'>
        <div id='interface'>
            {handleView()}
        </div>
    </div>
}

export default withRouter(Interface)

