import React from "react";
import "../Styles/Navbar.css";

import logo from '../Data/data.json';



const Navbar = () => {
 
  return (
    
    <div className="nav">
      <div className="logo">
      <a href="/dsd">
        <img id="logoImage" src={logo.logo} alt="" />
      </a>
      </div>
     <a className="navlinks" href ="/miphones">Mi Phones</a>
     <a className="navlinks" href="/redmiphones">Redmi Phones</a>
     <a className="navlinks" href ="/tv">Tv</a>
     <a className="navlinks" href="/laptops">Laptops</a>
     <a className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
     <a className="navlinks" href="/home">Home</a>
     <a className="navlinks" href="/audio">Audio</a>
     <a className="navlinks" href="/accessories">Accessories</a>
     <div className="searchbox">
       <input type="text"   placeholder="Search Products"/>
       <i className="far fa-search"></i>
     </div>

    </div>
    
  );
};

export default Navbar;
