import React from "react";
import "./playpage.css";

export default function PlayPage() {
  return (
    <div>
      Play Page
      <table class="border-separate border-spacing-2 border border-slate-400 ...">
        <thead>
          <tr>
            <th class="border border-slate-300 ...">Your Answer</th>
            <th class="border border-slate-300 ...">Question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 ...">asdfas</td>
            <td class="border border-slate-300 ...">asdfs</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Ohio</td>
            <td class="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Michigan</td>
            <td class="border border-slate-300 ...">Detroit</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">
              Your Name, current level, decal or pin
            </td>
            <td class="border border-slate-300 ...">
              You are on question 8/10
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
