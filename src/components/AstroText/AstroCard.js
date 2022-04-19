import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function AstroCard(data) {
  return (
    <div className={`${data.parentClass} bg-black`}>
      <div
        className={`max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ${data.cardOrientation}`}
      >
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div
            className={`min-w-max bg-cover rounded-xs hover:scale-105 cursor-pointer ${data.picture}`}
          ></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className={`${data.textStyle}`}>
            <span className="text-gray-200 bg-gray-800 px-2 py-1 rounded-md text-xs uppercase cursor-pointer">
              Réalisation{" "}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 mb-4 text-gray-400">{data.description}</p>

            <Link
              to={`${data.linkTo}`}
              className="font-semibold text-red-400 underline"
            >
              {data.linkContent}
            </Link>
            <a
              target="__blank"
              href="https://bright-agro.com/"
              className="font-semibold text-red-400 underline"
            >
              {data.linkExtContent}
            </a>
            <a
              target="__blank"
              href="https://t.co/Pn2vdrXQQ4"
              className="font-semibold text-red-400 underline"
            >
              {data.linkExt2Content}
            </a>
          </div>
        </ScrollAnimation>
        
      </div>
    </div>
  );
}
