import React from 'react';
import { Link } from 'react-router-dom';
import logo from  './logo.png';


function Navbar() {
  return (
  
     <div>
    <nav className="navbar navbar-light">
    <div className="container">
    <div className="navbar-header">
        <Link className="movie-logo-link" to="/">
                <img src={logo} alt="Logo"/> 
                </Link>
    </div>
        <div class="d-flex justify-content-center ">
  <div class="active p-2 bd-highlight ">
  
    </div>
 
</div>
<div class="d-flex justify-content-end">
      
     
        
    </div>
    </div>
    </nav>
    </div>
    
    

  );
}




export default Navbar;
