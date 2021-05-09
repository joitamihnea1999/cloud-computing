import React from 'react'

const Airport = ({airport, onClick}) => {
    return (
        
        <div className="airport-card" onClick={onClick}>
            <div className="airport-card-field" > <span>Name: </span>{airport.name}</div>
            <div className="airport-card-field" > <span>Location: </span>{airport.location}</div>
            <div className="airport-card-field" >  <a href={airport.website} target="_blank" rel="noreferrer">Website </a></div>
        </div>
    )
}

Airport.propTypes = {

}
export default Airport
