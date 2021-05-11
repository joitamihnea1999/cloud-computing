import React, { Fragment, useState } from "react";
import axios from "axios";
import Airport from "./Airport";
import ClipLoader from "react-spinners/ClipLoader";
import { FlightCard } from "./FlightCard";


export const Flight = () => {
    const [formData, setFormData] = useState({
        departureCode: "",
        arrivalCode: "",
        departureDate: ""
      });
  const[loading, setLoading] = useState(false);
  const [errors, setErros] = useState({ depError: false, arrivalError: false });
  const [showAirports, setShowAirports] = useState({ departureAirport: false, arrivalAirport: false });
  const [airports, setAirports] = useState({
    departureAirport: null,
    arrivalAirport: null,
  });
  const [flights, setFlights] = useState([]);
  const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFlights([]);
    axios.post("/flight",formData).then(result => {
        console.log(result.data.flights);
        setFlights(result.data.flights);
        setLoading(false);
    }) }
  const serchForDepartureAirport = (ev) => {
    axios.post("/airport", { code: ev.target.value }).then((result) => {
      if (result.data.error) {
        setErros({ ...errors, depError: true });
        setShowAirports({...showAirports, departureAirport: false});
        return;
      }
      setErros({ ...errors, depError: false });
      setAirports({ ...airports, departureAirport: result.data });
      setShowAirports({...showAirports, departureAirport: true});
    });
  };
  const serachForArrivalAirport = (ev) => {
    axios.post("/airport", { code: ev.target.value }).then((result) => {
      if (result.data.error) {
        setErros({ ...errors, arrivalError: true });
        setShowAirports({...showAirports, arrivalAirport: false});
        return;
      }
      setErros({ ...errors, arrivalError: false });
      setAirports({ ...airports, arrivalAirport: result.data });
      setShowAirports({...showAirports, arrivalAirport: true});
    });
  };
  return (
    <div className="flight-container">
      <form className="flight-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
        <input
          type="text"
          className={errors.depError && 'invalid'}
          name="departureCode"
          placeholder="Departure airport"
          onChange={(e) => onChange(e)}
          onBlur={(e) => serchForDepartureAirport(e)}
        />
       
        {showAirports.departureAirport && <Fragment>
            <span className="checkmark"></span>
            <Airport airport={airports.departureAirport} onClick={() => {setShowAirports({...showAirports,departureAirport: false})}} />
           </Fragment> } 

        </div>
        <div className="input-container">
        <input
        className={errors.arrivalError && 'invalid'}
          type="text"
          name="arrivalCode"
          onChange={(e) => onChange(e)}
          placeholder="Arrival airport"
          onBlur={(e) => serachForArrivalAirport(e)}
        />
         {showAirports.arrivalAirport && <Fragment>
            <span className="checkmark"></span>
            <Airport airport={airports.arrivalAirport} onClick={() => {setShowAirports({...showAirports,arrivalAirport: false})}} />
           </Fragment> } 
        </div>
        
       
        <input type="date" name="departureDate"   onChange={(e) => onChange(e)} />
        <button type="submit">Search</button>
      </form>
      {loading && <Fragment> <h1>
        Loading... This might take a while :)
          </h1>
          <div className="spinner-container">
          <ClipLoader color={'red'} loading={loading}  size={150} />

          </div>
          </Fragment>}
          {flights === null && <h1> No flights found</h1>}
          {flights !== null && flights && flights.length > 0 && flights.map(flight => <FlightCard flight={flight} />)}
    </div>
   
  );
};
