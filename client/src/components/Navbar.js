import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            
            <Link to="/flight">Flight schedule</Link>
        </div>
    )
}



export default Navbar;
