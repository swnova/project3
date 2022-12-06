import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" id="homepage">
        <Link
          to="/"
          className={currentPage === "homepage" ? "nav-link active" : "nav-link"}
        >
          Home Page
        </Link>
      </li>
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
      <li className="nav-item">
        <Link
          to="playpage"
          className={currentPage === "playpage" ? "nav-link active" : "nav-link"}
        >
          Play Page
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="finalscore"
          className={currentPage === "finalscore" ? "nav-link active" : "nav-link"}
        >
          Final Score
        </Link>
      </li>
    </ul>
  );
}

export default Header;
