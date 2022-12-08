import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-full p-5">
        <div className="signInBox border-current border-solid border-4">
          <form className="flex flex-col justify-center items-center m-5">
            <div className="m-2">
              <input
                className="rounded text-lg  text-center"
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
            </div>
            <div className="m-4 ">
              <input
                className="rounded text-lg  text-center"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className="mt-4">
              <button className="bg-red-500 p-2" id="signInButton">
                {" "}
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="text-sm text-red-500 mt-5 text-center">
          New Player? Enter your name, password and{" "}
          <button className="bg-red-500 p-1 text-sm text-black" id="signUpButton">
            {" "}
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

// const loginForm = document.querySelector("#login");
// loginForm.addEventListener("submit", e => {
//     e.preventDefault();
//     console.log('PREVENTED DEFAULT!')
//     const userObj = {
//         username: document.querySelector("#loginUser").value,
//         password: document.querySelector("#loginPassword").value,
//     }
//     //fetch post request for login
//     fetch("/", {
//         method: "POST",
//         body: JSON.stringify(userObj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res => {
//         if (res.ok) {
//             //link to progile page
//        //     location.replace("/")
//         } else {
//             alert("error logging in")
//         }
//     })
// })
// //sign up
// const signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit",e=>{
//     e.preventDefault();
//     console.log('PREVENTED DEFAULT!')
//     const userObj = {
//         username:document.querySelector("#signupUser").value,
//         password:document.querySelector("#signupPassword").value,
//         first_name:document.querySelector("#signupFirst").value,
//         last_name:document.querySelector("#signupLast").value,
//     }
//     //Link
//     fetch("/",{
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             alert("signed up!")
//         //    location.replace("/homepage/index.js")
//         } else {
//             alert("error signing up")
//         }
//     })
// })
