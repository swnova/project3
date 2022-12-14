import React from "react";
import "./startpage.css";
import { Link } from "react-router-dom";
import PlayerCard from "../playercard/index.js";

export default function StartPage({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="statcard">
        <PlayerCard />
      </div>
      <div className="playerstat"></div>
      <Link to="/playpage" className="link-btn">
        Start Game?
      </Link>
    </div>
  );
}
