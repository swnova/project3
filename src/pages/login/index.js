import React from "react";
import "./login.css";

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
        <div class="text-sm text-red-500 mt-5 text-center">
          New Player? Enter your name, password and{" "}
          <button class="bg-red-500 p-1 text-sm text-black" id="signUpButton">
            {" "}
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
