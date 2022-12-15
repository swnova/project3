import React from "react";
import "./startpage.css";
import { Link } from "react-router-dom";
import PlayerCard from "../playercard/index.js";

export default function StartPage({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="statcard">
        <PlayerCard />
        <img variant="top" src="https://res.cloudinary.com/dxmxtpumw/image/upload/c_scale,h_2093,q_100/v1670959256/tim-trad-2gk6BDXSxlQ-unsplash_yzik9x.jpg" />
      </div>
      <div className="playerstat">
      <Link to="/playpage" className="buttons">
        Start Game
      </Link>
      <Link to="/" className="buttons">
        Save Game
      </Link>
      <Link to="/" className="buttons">
        Edit Profile
      </Link>
      </div>
    </div>
  );
}
