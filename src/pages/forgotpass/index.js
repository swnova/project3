import React from "react";
import "./forgotpass.css";
import { Link } from "react-router-dom";


export default function LogIn(props){
 
  return (
    <div className="loginbox">
      <h1>Forgot password</h1>
      <p>Unfotunatly theres nothing we can do about you forgetting your password.</p>
      <h3>Next time set your password to "Incorrect"</h3>
      <p>That way, if you type in a different password, you will be prompted that "Your password is incorrect" And then you will remember.</p>
      <Link to="/login" className="buttons">Back</Link>
      </div>
  );
}