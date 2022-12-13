import React from "react";
import "./finalscore.css";
import { Link } from "react-router-dom";
import InfoModal from "../infomodal/index.js";

export default function FinalScore() {
  return (
    <div className="finalpage">
      <InfoModal />
      <table className="border-separate">
        <thead>
          <tr>
            <th className="finaltablehead">
              Correct
            </th>
            <th className="finaltablehead">
              Wrong
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="finaltable">
              asdfas
            </td>
            <td className="finaltable">
              asdfs
            </td>
          </tr>
          <tr>
            <td className="finaltable">
              Ohio
            </td>
            <td className="finaltable">
              Columbus
            </td>
          </tr>
          <tr>
            <td className="finaltable">
              Michigan
            </td>
            <td className="finaltable">
              Detroit
            </td>
          </tr>
          <tr>
            <td className="finaltable">
              Your Name, current level, decal or pin
            </td>
            <td className="finaltable">
              You are on question 8/10
            </td>
          </tr>
        </tbody>
      </table>
     <div className="startagain">
      <Link to="/startpage" className="link-btn">
        Start Another Game?
      </Link>
      </div>
    
    </div>
  );
}
