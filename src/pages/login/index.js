import React from "react";
import "./login.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LogIn({ props, currentPage, handlePageChange }) {
  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch(
      "https://vroom-backendsw.herokuapp.com/api/players/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem("playerName", data.player.playerName);
      localStorage.setItem("email", data.player.email);
      localStorage.setItem("playerLvl", data.player.playerLvl);
      // change isLoggedIn to true
      props.setIsLoggedIn(true);
      localStorage.setItem("token", data.token);
      alert("Login successful");
      props.setisloggedin(true);
    } else {

      
      alert("Please check your username and password");
    }
  }

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
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
        <input type="submit" value="Login" />
      </form>
      <Link to="/startpage" className="link-btn">
        Start Playing?
      </Link>
    </div>
  );
}
