import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PartnerCard = (props) => {

    return <Card>
        <Showcase>
            <img src={props.info.avatar} alt={`User ${props.info.id} avatar`}/>
        </Showcase>
        <UserInfo>
            <h1>{props.info.first_name}, {props.info.age}</h1>
            <p>{props.info.bio ? props.info.bio : "This user has no bio..."}</p>
        </UserInfo>
        <UserInteractions>
            <button>Add User</button>
            <button>Message</button>
            <button onClick={()=>props.remove(props.info.id)}>Skip</button>
        </UserInteractions>
    </Card>

}

export default PartnerCard

const Card = styled.div`
    width: 90%;
    max-height: 30vh;
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
`
const Showcase = styled.div`
    width: 25%;

    img {
        max-width: 100%;
        border-radius: 10px;
    }
`

const UserInfo = styled.div`
    width: 50%;

    h1 {
        margin-top: 0;
        font-size: 24px;
    }
`

const UserInteractions = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25%;
    justify-content: center;
    
    button {
        height: 30%;
        width: 100%;
        color: white;
        font-size: 20px;
        background-color: #3f51b5;
        border: 0px;
        border-radius: 10px;

        &:hover {
            background-color: #334296;
        }

        &:focus {
            outline: none;
            background-color: #334296;
        }
    }
`