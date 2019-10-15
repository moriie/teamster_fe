import React, { useState, useEffect } from 'react'
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

    return <ul>
        {makePartnersList()}
    </ul>
}

export default PartnersContainer