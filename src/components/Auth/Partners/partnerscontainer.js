import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import PartnerCard from './partnercard'
import { AuthUser, fetchURL } from '../../../App'

const PartnersContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        fetch(`${fetchURL}/users`)
        .then(res=>res.json())
        .then(json=>{
            setPartners(json.filter((partner)=>partner.id !== user.id))
        })
    }, [])

    const makePartnersList = () => {
        if (!partners.length) return <h1>Uh oh! No partners available.</h1>
        return partners.map((partner)=>{
            return <PartnerCard info={partner} />
        })
    }

    return <PartnersList>
        {makePartnersList()}
    </PartnersList>
}

export default PartnersContainer

const PartnersList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 70vh;
    margin: 5vh 25vw;
    padding: 5vh 5vh;
    align-items: center;
    overflow-y: scroll;
    background-color: hsla(213, 20%, 36%, 0.7);

    div:first-child {
        margin-top: 0px;
    }

    ::-webkit-scrollbar {
        width: .75vw;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #6F7179; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #5A5C64; 
    }
`