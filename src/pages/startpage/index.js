import React from "react";
import "./startpage.css";

export default function StartPage() {
  return (
    <div>
      Start Page
      <div className="buttoncontainer">
        <button type="button single-player-button" className="single-button">
          Single Player
        </button>
        <button type="button multi-player-button" className="mulit-button">
          Multi Player
        </button>
      </div>
    </div>
  );
}
