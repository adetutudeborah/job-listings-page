import React from "react"; 
import "./Header.css"; 
// import headerimg from "../../assets/bg-header-mobile.png"

function Header() {
    return (
        <div className="header">
           <div>
               {/* <img src={headerimg} alt="Header Image" className="headerimg img-fluid"/> */}
              <h1 className="heading text-center">Job Listings</h1>
           </div>

           <div className="searchfield">
                <p className="clear">Clear <span className="icon">&#215;</span></p>
               <input type="text" class="searchinput" placeholder="search by role or programming languages"/>
           </div> 
        </div>


     
    )
}

export default Header;