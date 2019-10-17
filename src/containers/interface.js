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
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(20, 5%);
    grid-template-columns: repeat(5, 20%);

    div.MuiPaper-root{
        color: whitesmoke;
        background-color: rgba(51, 51, 51, 0.188);
        box-shadow: 6px 4px 6px #333;
        margin-top: 1vh;
    }

    #main-header{
        animation: none;
    }

    div.MuiCardActions-root{
        display: flex;
        flex-direction: row;
        margin-top: 100%;
    }

    .MuiCardHeader-root, .MuiCardContent-root {
        padding-top: 0;
    }

    div.MuiPaper-root:hover div.MuiCardActions-root{
        animation: reveal-option .5s ease-in-out forwards;
    }

    div.MuiCardActions-root button{
        flex: 1 1 0;
    }

    span.MuiTypography-root{
        font-size: 7vh;
        pointer-events: none;
    }

    p.MuiTypography-root{
        pointer-events: none;
    }

    @keyframes reveal-option { from {margin-top: 100%} to {margin-top: 0%;} }

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
`
const Wrapper = styled.div`
    position: relative;
    background-size: cover;
    background-image: url(${bg});
    height: 100%;
    width: 100%;
    margin-right: 0;
    color: white;
`