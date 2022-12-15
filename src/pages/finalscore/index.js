import React from "react";
import "./finalscore.css";
import { Link } from "react-router-dom";
import InfoModal from "../infomodal/index.js";
import PlayerCard from "../playercard/index.js";

export default function FinalScore() {
  return (
    <div className="finalpage">
      <InfoModal />
      <PlayerCard />
     <div className="startagain">
      <Link to="/startpage" className="link-btn">
        Start Another Game?
      </Link>
      </div>
    
    </div>
  );
}
