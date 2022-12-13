import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="header">
        <ul className="nav-nav-tabs border-solid border-4 border-current place-content-end">
          <li className="nav-item" id="homepage">
            <Link
              to="/"
              className={
                currentPage === "homepage" ? "nav-link active" : "nav-link"
              }
            >
              Home Page
            </Link>
          </li>
          
        
            
      
          <div className="title">VROOM</div>
          <li className="nav-item">
            <Link
              to="login"
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
}

export default Header;
