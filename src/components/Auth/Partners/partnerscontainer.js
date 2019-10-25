import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import PartnerCard from './partnercard'
import { AuthUser, fetchURL } from '../../../App'

const PartnersContainer = () => {

    const [user, setUser] = useContext(AuthUser)
    const [partners, setPartners] = useState([])

    useEffect(()=>{

        Promise.all([
        fetch(`${fetchURL}/users`),
        fetch(`${fetchURL}/ignores/${user.id}/list`)
        ])
        .then(([res1, res2])=>{
            return [res1.json(), res2.json()]
        })
        .then((vals)=>{
            setTimeout(()=>console.log(vals))
            // debugger;
            // setPartners(partners.filter((partner)=>partner.id !== user.id && ignores.includes(partner.id)))
        })

    }, [])

    const ignorePartner = (id) => {

        fetch(`${fetchURL}/ignores`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                ignored_user: id
            })
        })

        let newArr = partners
        newArr = newArr.filter((p)=>{
            return p.id !== id
        })
        setPartners(newArr)
    }

    const showGoals = () => {

    }


    const makePartnersList = () => {
        if (!partners.length) return <h1>Uh oh! No partners available.</h1>
        return partners.map((partner)=>{
            return <PartnerCard info={partner} ignore={ignorePartner}/>
        })
    }

    return <PartnersList>
        {makePartnersList()}
    </PartnersList>
}

export default PartnersContainer

const PartnersList = styled.ul`
    grid-area: 2/2/span 17/ span 3;
    display: flex;
    flex-direction: column;
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