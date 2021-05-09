import React from 'react'

export const FlightCard = ({flight}) => {

    const {airlines, arrival_time, price, cabin_class, trip_duration, departure_time, detail_url, layovers   } = flight;


    return (
        <a href={detail_url} target="_blank" className="flight-card" rel="noreferrer" >
            <p>Airline: {airlines}</p>
            <p>Departure time: {departure_time}</p>
            <p>Arrival time: {arrival_time}</p>
            <p>Trip_duration: {trip_duration}</p>
            <p>Price : {price}$</p>
            <p>Cabin Class : {cabin_class}</p>
           {layovers &&  <p>Layovers : {layovers}</p>}
        </a>
    )
}
