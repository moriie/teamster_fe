import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PartnerCard from './partnercard'
import { fetchURL } from '../../../App'

const PartnersContainer = () => {

    
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        fetch(`${fetchURL}/users`)
        .then(res=>res.json())
        .then(json=>{
            setPartners(json)
        })
    }, [])

    const makePartnersList = () => {
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
        /* border-top: 1px solid white; */
        margin-top: 0px;
    }
`