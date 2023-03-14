import React from "react"; 
import "./Header.css"; 
// import headerimg from "../../assets/bg-header-mobile.png"

function Header() {
    return (
        <div className="header">
           {/* <img src={headerimg} alt="Header Image" className="headerimg img-fluid"/> */}
           <h1 className="heading text-center">Job Listings</h1>
        </div>
     
    )
}

export default Header;