import { Link } from "react-router-dom";
import "./header.css";
import React, { useEffect } from "react";
import userEvent from "@testing-library/user-event";


export function Header(currentPage,props) {

const player = localStorage.getItem("playerName");

const onLinkClick = () => {
  localStorage.setItem("token","")
  localStorage.setItem("playerName", "");
  localStorage.setItem("email","");
  localStorage.setItem("playerLvl", "");
  window.location.href = '/'
};

if(player==""){
  return (
    <div>
    <div className="header">
      <ul className="nav-nav-tabs border-solid border-4 border-current place-content-end">
        <li className="nav-item" id="homepage">
          <Link
            to="/" id="font"
            className={
              currentPage === "homepage" ? "nav-link active" : "nav-link"
            }
          >
            Home Page
          </Link>
        </li>
        
      
          
    
        <div className="title">VROOM     </div>
        <li className="nav-item">
    
          <Link
            to="/login" id="font"
            className={
              currentPage === "login" ? "nav-link active" : "nav-link"
            }
          >
            Log In
          </Link>
        </li>
      </ul>
    </div>
    </div>
    );
}else{
return (
  <div>
  <div className="header">
    <ul className="nav-nav-tabs border-solid border-4 border-current place-content-end">
      <li className="nav-item" id="homepage">
        <Link
          to="/startpage" id="font"
          className={
            currentPage === "homepage" ? "nav-link active" : "nav-link"
          }
        >
             Profile
        </Link>
      </li>
      
    
        
  
      <div className="title">VROOM</div>
      <li className="nav-item">

        <Link onClick={onLinkClick} id="font" className={ currentPage === "homepage" ? "nav-link active" : "nav-link" }>
          Log Out
        </Link>
      </li>
    </ul>
  </div>
</div>
);
}

}

export default Header;
