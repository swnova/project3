import React from "react";

export default function Homepage() {
  return (
    <div>
      Homepage
      <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="homepage border">
          <form class="flex flex-col justify-center items-center m-5">
            <div class="mt-4">
              <button class="bg-sky-500 p-2" id="singlePlayerButton">
                {" "}
                Single Player
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-full h-full p-5">
        <div class="homepage border">
          <form class="flex flex-col justify-center items-center m-5">
            <div class="mt-4">
              <button class="bg-sky-500 p-2" id="mulitPlayerButton">
                {" "}
                Multi Player
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
