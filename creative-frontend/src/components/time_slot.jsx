import React from 'react'

const TimeSlot = ({time}) => {
    const renderedTime = formatTime(time);
    const meridiem =  time < 1200 ? "AM" : "PM"

    return (
        <div>{renderedTime}{meridiem}</div>
    )

    function formatTime(time) {
        console.log(time)   
        let minutes = time.substring(time.length-2,time.length)
        console.log(minutes)
        let hours;
        if (time.length === 3) {
            hours = time.substring(0,1)
        } else {
            hours = time.substring(0,2)  
        }
        if (hours === "00") {
            hours = 12;
        } else if (hours.charAt(0) === 0) {
            hours = hours.substring(1,hours.length)
        } else if (hours > 12) {
            hours -= 12
        }
       return hours + ':' + minutes
    }
}

export default TimeSlot