import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { v4 as uuid } from 'uuid'

const Calendar = () => {

    const [date, setDate] = useState(moment())
    const [month, setMonth] = useState(0)

    useEffect(()=>{
        setDate(moment().add(month, 'month'))
    }, [month])

    const weekdays = moment.weekdays().map((day)=>{
        return <span className='cal-n' key={day+uuid()}>{day}</span>
    })

    const createMonth = (date) => {
        let thisMonth = []
        for (let b_day = 0; b_day < date.startOf('month').format('d'); b_day++){
            thisMonth.push(<span className='cal-d empty' key={`${b_day}-${uuid()}`}/>)
        }
        for (let dayOfMonth = 1; dayOfMonth <= date.endOf('month').format('D'); dayOfMonth++){
            thisMonth.push(<span className='cal-d' key={`${dayOfMonth}-${uuid()}`}>{dayOfMonth}</span>)
        }
        for (let e_day = date.endOf('month').format('d'); e_day < 6; e_day++){
            thisMonth.push(<span className='cal-d empty' key={`${e_day}-${uuid()}`}/>)
        }
        if (thisMonth.length > 35) {
            thisMonth[thisMonth.length-1] = <span className='cal-d empty' style={{gridArea: '8/7/8/7'}} key={`${date.endOf('month').format('d')}-${uuid()}`}/>
        }
        return thisMonth
    }

    return <Wrapper>
        <Title>
            <button onClick={()=>setMonth(month-1)}>{'<'}</button>
            <div id='month-year'>{date.format('MMMM')+' '+date.format('YYYY')}</div>
            <button onClick={()=>setMonth(month+1)}>{'>'}</button>
        </Title>
        {weekdays}
        {createMonth(date)}
    </Wrapper>

}

export default Calendar;

const Wrapper = styled.div`
    grid-area: 1/1/20/10;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 7.5% 3% repeat(6, 1fr);
    grid-template-columns: repeat(7, 1fr);
    background-color: hsla(213, 20%, 36%, 0.7);
    font-size: 2vw;

    @media screen and (min-width: 500px){
        .cal-n{
            font-size: 50%;
        }
    }

    .cal-n:first-of-type{
        grid-area: 2/1/2/1;
    }

    .cal-n:last-of-type{
        grid-area:2/7/2/7;
    }

    .cal-d:first-of-type{
        grid-area: 3/1/3/1;
    }

    .cal-d:last-of-type{
        grid-area: 7/7/8/7;
    }

    .cal-n{
        border: 1px solid black;
    }

    .cal-d{
        border: 1px solid black;
    }

    #month-year {
        display: inline-block;
        min-width: 25vw;
    }
`

const Title = styled.span`
    grid-area: 1/1/1/8;
    font-size: 2.5vw;
    color: whitesmoke;

    button {
        color: whitesmoke;
        background-color: transparent;
        border: none;
        font-size: 1em;
        outline: none;
    }
`