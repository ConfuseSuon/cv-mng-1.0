import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { closeCalendarFunc } from '../Features/interview/interviewSlice'


const InterviewCalendar = () => {


    const { interviewData } = useSelector((store) => store.interview)

    const meetingEvents = interviewData.map((item) => {

        const interviewerNames = item.interviewerId.map((interviewer) => interviewer.interviewerName);
        const applicantNames = JSON.parse(item.applicantId).map((applicant) => applicant.applicantName);
        return {
            'title': item.title,
            'start': new Date(item.dateTime),
            'end': new Date(item.dateTime),
            desc: [
                { interviewerNames: interviewerNames.join(', ') },
                { applicantNames: applicantNames.join(', ') },
                { dateTime: item.dateTime }
            ],
        }
    })

    const handleEventClick = (event) => {
        console.log(event)
    }


    const localizer = momentLocalizer(moment)

    const dispatch = useDispatch()
    return (

        <React.Fragment>

            <div className="calendar-container">
                <div className="calendar-wrapper">
                    <h4>Meeting</h4>
                    <Calendar
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                        events={meetingEvents}
                        onSelectEvent={handleEventClick}
                        style={{ height: '32rem' }}
                    />
                </div>
                <button className='btn cancel-btn ' onClick={() => dispatch(closeCalendarFunc())} > Close</button>
            </div>
        </React.Fragment>


    )
}

export default InterviewCalendar