import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetails = () => {

  const {id} = useParams()

      const [event, setEvent] = useState({})
  
      const getEvent = async () => {
          const res = await fetch(`https://eventservice11-bye8hfakhnhjd9b5.swedencentral-01.azurewebsites.net/api/events/${id}`)
  
          if (res.ok) {
              const response = await res.json() 
              setEvent(response.result)
          }
      }
  
      useEffect(() => {
          getEvent()
      }, [])

  return (
    <div className="event-details">
      <h1 className="event-details">{event.title}</h1>
      <h4 className="event-details-1">{event.location}</h4>
      <h4 className="event-details-1">{event.description}</h4>
      <h4 className="event-details-1">{event.eventDate}</h4>
      <h4>{}</h4>
      <Link className="event-details btn-book" to={`/events/booking/${id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetails