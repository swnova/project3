import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="signInBox border-current border-solid border-4">
          <form class="flex flex-col justify-center items-center m-5">
            <div class="m-2">
              <input
                class="rounded text-lg  text-center"
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
            </div>
            <div class="m-4 ">
              <input
                class="rounded text-lg  text-center"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div class="mt-4">
              <button class="bg-red-500 p-2" id="signInButton">
                {" "}
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div class="text-sm mt-5 text-center">
          New Player? Enter your name, password and{" "}
          <button class="bg-red-500 p-1 text-sm" id="signUpButton">
            {" "}
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        username: document.querySelector("#loginUser").value,
        password: document.querySelector("#loginPassword").value,
    }
    //fetch post request for login
    fetch("/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            //link to progile page
            location.replace("/")
        } else {
            alert("error logging in")
        }
    })
})
//sign up
const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        username:document.querySelector("#signupUser").value,
        password:document.querySelector("#signupPassword").value,
        first_name:document.querySelector("#signupFirst").value,
        last_name:document.querySelector("#signupLast").value,
    }
    //Link
    fetch("/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("signed up!")
            location.replace("/homepage/index.js")
        } else {
            alert("error signing up")
        }
    })
})
