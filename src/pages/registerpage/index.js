import React from "react";
import "./registerpage.css";
import { useState } from 'react'
import { Link } from "react-router-dom";


export default function Register(props) {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    const registerUser=event=>{
        event.preventDefault();
        props.handleSignupSubmit({
          playerName: name,
          email:email,
          password:password
        })
      }
  return (
    <div class="registerbox">
    <h1>Register</h1>
    <form onSubmit={registerUser}>
      <div class="input1">
        <input

            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
        />
        </div>
        <div class="input1">
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
        />
        </div>
        <div class="input1">
        <input

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
        />
        </div>
        <input className="registerbtn" type="submit" value="Register" />
    </form>
    <Link to="/login" className="buttons">Back</Link>
</div>
  )
}
