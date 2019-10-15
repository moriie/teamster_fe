import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PartnerCard = (props) => {

    return <Card>
        <Showcase>
            <img src={props.info.avatar} alt={`User ${props.info.id} avatar`}/>
            <span>{props.info.username}</span>
        </Showcase>
        <UserInfo>
        </UserInfo>
    </Card>

}

export default PartnerCard

const Card = styled.div`
    width: 90%;
    height: 30vh;
    margin-top: 2vh;
    /* border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white; */
    display: flex;
    flex-direction: row;
`
const Showcase = styled.div`
    width: 25%;

    img {
        height: 85%;
        width: 100%;
        border-radius: 10px;
    }

    span {
        font-size: 18px;
    }
`

const UserInfo = styled.div`
    width: 50%;
`