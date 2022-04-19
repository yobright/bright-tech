import React from "react";

function AstroCard() {
  return (
    <div
      class={`bg-stretch bg-top mx-auto mt-10 h-[35rem] text-white sm:h-[35rem] bg-[url('https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/ast.png')]`}
    >
      <div class="relative h-full">
        <div class="sm:w-2/3 absolute bottom-20 leading-10 left-4 sm:left-8">
          <span className="text-gray-900 bg-gray-200 px-3 py-2 rounded-md text-xs uppercase cursor-pointer">
            Réalisations{" "}
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold">astro store</h1>
        </div>
      </div>
    </div>
  );
}

export default AstroCard;
