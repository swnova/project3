import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div>
        <ul className="nav-nav-tabs border-solid border-4 border-current place-content-end">
          <button className="log-in-button bg-red-500 border-solid border-2 border-current float-right">
            Login in
          </button>
          <li className="nav-items">
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
                className={
                  currentPage === "playpage" ? "nav-link active" : "nav-link"
                }
              >
                Play Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="startpage"
                className={
                  currentPage === "startpage" ? "nav-link active" : "nav-link"
                }
              >
                Start Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="finalscore"
                className={
                  currentPage === "finalscore" ? "nav-link active" : "nav-link"
                }
              >
                Final Score
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
