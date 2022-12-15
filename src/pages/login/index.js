import React from "react";
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function LogIn(props){
 
  //login
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login=event=>{
      event.preventDefault();
      props.handleLoginSubmit({
        email:email,
        password:password
      })
    }
  
  return (
    <div className="loginbox">
      <h1>Login</h1>
      <form onSubmit={Login}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" className="loginbtn" />
      </form>
      <Link to="/forgotpass" className="buttons">Forgot Password</Link>
      <br />
      <Link to="/registerpage" className="buttons">Register</Link>
      </div>
  );
}
