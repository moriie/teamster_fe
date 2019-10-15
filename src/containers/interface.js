import React, { useContext } from 'react'
import { Route, withRouter } from 'react-router-dom'
import GoalForm from '../components/Auth/Goals/goalform'
import GoalsContainer from './goalscontainer'
import Main from './main'
import PartnersContainer from '../components/Auth/Partners/partnerscontainer'
import NetworkContainer from './networkcontainer'
import NetworkForm from '../components/Auth/Networks/networkform'
import Profile from '../components/Auth/Profile/profile'
import EditProfileForm from '../components/Auth/Profile/editprofileform'
import Calendar from '../components/Auth/Calendar/calendar'
import bg from '../dash_BG.jpg'

import styled from 'styled-components'

import { ViewState } from '../App'

const Interface = () => {

    const [view, setView] = useContext(ViewState)
 
    const handleView = () => {
        switch (view) {
            case 'calendar':
                return <Route component={Calendar} />
            case 'goals-container':
                return <Route component={GoalsContainer} />
            case 'goals-form':
                return <Route component={GoalForm} />
            case 'partners-container':
                return <Route component={PartnersContainer} />
            case 'network-container':
                return <Route component={NetworkContainer} />
            case 'network-form':
                return <Route component={NetworkForm} />
            case 'edit-profile':
                return <Route component={EditProfileForm} />
            case 'profile-page':
                return <Route component={Profile} />
            default:
                return <Route component={Main} />
        }
    }

    return <Wrapper>
        <Interactive>
            {handleView()}
        </Interactive>
    </Wrapper>
}

export default withRouter(Interface)

//----Styles----//

const Interactive = styled.div`
    grid-area: 1/1/20/10;
    display: grid;
    grid-template-rows: repeat(20, 5%);
    grid-template-columns: repeat(5, 20%);

    div.MuiPaper-root{
        color: whitesmoke;
        background-color: rgba(51, 51, 51, 0.188);
        box-shadow: 6px 4px 6px #333;
    }

    #main-header{
        animation: none;
    }

    div.MuiCardHeader-root{
        padding-top: 0vh;
        padding-bottom: 0vh;
    }

    div.MuiCardActions-root{
        display: flex;
        flex-direction: row;
    }

    div.MuiCardActions-root button{
        margin-bottom: -100%;
        flex: 1 1 0;
    }

    span.MuiTypography-root{
        font-size: 3.5vw;
        pointer-events: none;
    }

    p.MuiTypography-root{
        pointer-events: none;
    }

    div.MuiPaper-root:hover div.MuiCardActions-root button{
        animation: reveal-option .5s ease-in-out forwards;
    }

    @keyframes reveal-option { from {margin-bottom: -100%} to {margin-bottom: 0%;}}

    .MuiTypography-root::selection{
        background-color: transparent;
    }

    .MuiListItem-root:hover {
        background-color: hsla(213, 20%, 36%, 0.8);
    }

    ul.MuiList-root .MuiTypography-root{
        overflow: auto;
        margin-top: 1vh;
        font-size: 1.5vw;
        color: whitesmoke;
    }

    .MuiPaper-root {
        margin-top: 1vh;
    }
`
const Wrapper = styled.div`
    background-size: cover;
    background-image: url(${bg});
    height: 96vh;
    width: 100vw;
    margin-right: 0;
    display: grid;
    color: white;
    grid-template-rows: repeat(10, 10%);
    grid-template-columns: repeat(5, 20%);
`