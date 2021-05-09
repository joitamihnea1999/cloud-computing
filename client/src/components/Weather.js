import React from 'react'

export const Weather = () => {
    return (
        <div>
            <form>
                <input type="text" name="daparture airport" placeholder="Departure airport" />
                <input type="text"  placeholder="Arrival airport"/>
                <input type="date" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
