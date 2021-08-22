import TimeSlot from "./time_slot"

const CalendarDay = ({day}) => {

    const timeSlots = ["0000", "0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800", "0900", "1000", "1100",
        "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300"]

    return (
        <div style={{display: "inline-block", padding: "4em"}}>
            <div>{day}</div>
            <div>{timeSlots.map((time,i) => <TimeSlot time={time} key={i}></TimeSlot>)}</div>
        </div>
    )
}

export default CalendarDay