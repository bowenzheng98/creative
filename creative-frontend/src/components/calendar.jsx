import React from 'react';
import CalendarDay from './calendar_day'

const Calendar = () => {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return (
        <div style={{width: "100vw"}}>
            {days.map((day, i) => (<CalendarDay day={day} key={i}></CalendarDay>))}
        </div>
       
    )
}

export default Calendar;