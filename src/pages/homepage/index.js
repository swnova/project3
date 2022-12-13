import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function Homepage() {
  return (
    <div>
      <div className="homepage">
        <h1>Vroom</h1>
        <button className="playbutton">Play</button>
      </div>
      <Link to="playpage" className="nav-link">
        Play Page
      </Link>
    </div>
  );
}
