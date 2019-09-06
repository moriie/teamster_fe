import React, {useState, useEffect} from 'react'
import moment from 'moment'
import uuid from 'uuid/v4'

const Calendar = () => {

    const [date, setDate] = useState(moment())
    const [month, setMonth] = useState(0)

    useEffect(()=>{
        setDate(moment().add(month, 'month'))
    }, [month])

    const weekdays = moment.weekdays().map((day)=>{
        return <span className='cal-n' key={day+uuid()}>{day}</span>
    })

    const createMonth = (date, weekdays) => {
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
        return thisMonth
    }

    return <div className='calendar'>
        <span className='m-title'>
            <button id='cal-btn' onClick={()=>setMonth(month-1)}>{'<'}</button>
            {date.format('MMMM')+' '+date.format('YYYY')}
            <button id='cal-btn' onClick={()=>setMonth(month+1)}>{'>'}</button>
        </span>
        {weekdays}
        {createMonth(date)}
    </div>

}

export default Calendar;