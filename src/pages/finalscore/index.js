import React from "react";
import { Link } from "react-router-dom";
import InfoModal from "../infomodal/index.js";

export default function FinalScore() {
  return (
    <div>
      <InfoModal />
      <table className="border-separate border-spacing-2 border-blue-800 border-6 ...">
        <thead>
          <tr>
            <th className="border border-purple-500 border-y-8 text-5xl backdrop-hue-rotate-90 text-red-500 ...">
              Correct
            </th>
            <th className="border border-purple-500 border-y-8 text-5xl backdrop-hue-rotate-90 text-red-500 ...">
              Wrong
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              asdfas
            </td>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              asdfs
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              Ohio
            </td>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              Columbus
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              Michigan
            </td>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              Detroit
            </td>
          </tr>
          <tr>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              Your Name, current level, decal or pin
            </td>
            <td className="border border-slate-500 backdrop-hue-rotate-90 text-red-500 ...">
              You are on question 8/10
            </td>
          </tr>
        </tbody>
      </table>
     
      <Link to="/startpage" className="link-btn">
        Start Another Game?
      </Link>
    
    </div>
  );
}
