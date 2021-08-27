import React, { useState } from 'react'
import { useEffect } from 'react';
import './timeslot.css'

const TimeSlot = ({time}) => {

    const [renderedTime, setRenderedTime] = useState("")
    const [meridiem, setMeridiem] = useState("")
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setRenderedTime(formatTime(time))
        setMeridiem(time < 1200 ? "AM" : "PM")
    },[time])

    const handleClick = () => {
        setSelected(!selected);
    }

    // useEffect(() => {
    //     console.log(selected)
    // }, [selected])

    return (
        <div className="timeslot" style={{borderColor: selected ? "blue" : "black"}} onClick={handleClick}>{renderedTime}{meridiem}</div>
    )

    function formatTime(time) {   
        let minutes = time.substring(time.length-2,time.length)
        let hours;
        if (time.length === 3) {
            hours = time.substring(0,1)
        } else {
            hours = time.substring(0,2)  
        }
        if (hours === "00") {
            hours = 12;
        } else if (hours.charAt(0) === "0") {
            hours = hours.substring(1,hours.length)
        } else if (hours > 12) {
            hours -= 12
        }
       return hours + ':' + minutes
    }
}

export default TimeSlot