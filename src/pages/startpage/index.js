import React from "react";
import "./startpage.css";

export default function StartPage() {

  return <div>Start Page
 <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="homepage border  border-double border-5 border-lime-500">
          <form class="flex flex-col justify-center items-center m-5">
            <div class="mt-4">
              <button
                class="bg-red-800 text-lime-500 text-2xl p-2"
                id="singlePlayerButton"
              >
                {" "}
                Single Player
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="homepage border  border-double border-5 border-lime-500">
          <form class="flex flex-col justify-center items-center m-5">
            <div class="mt-4">
              <button
                class="bg-red-800  text-lime-500 text-2xl p-2"
                id="mulitPlayerButton"
              >
                {" "}
                Multi Player
              </button>
            </div>
          </form>
        </div>
      </div>

  </div>
};
