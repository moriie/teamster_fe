import React from 'react'
import moment from 'moment'
import uuid from 'uuid/v4'

const Calendar = () => {

    const weekdays = moment.weekdays().map((day)=>{
        return <th key={day+uuid()}>{day}</th>
    })

    return <div id='calendar'>
        <div className='blur-box'>
            {weekdays}
        </div>
    </div>

}

export default Calendar;