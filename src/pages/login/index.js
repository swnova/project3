import React from "react";

export default function LogIn() {
  return (
    <div>
      Log In
      <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="signInBox border">
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
            <div class="m-2">
              <input
                class="rounded text-lg  text-center"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div class="mt-4">
              <button class="bg-sky-500 p-2" id="signInButton">
                {" "}
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div class="text-sm mt-5 text-center">
          New User? Enter your desired username and password and{" "}
          <button class="bg-sky-500 p-1 text-sm" id="signUpButton">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
