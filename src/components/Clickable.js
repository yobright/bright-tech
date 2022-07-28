import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Clickable() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-justify">
          <ScrollAnimation animateIn="fadeIn">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 w-32 -mt-8 -ml-20 text-blue-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            <span className="relative"></span>
            <h2 className="tracking-tight text-gray-900 sm:text-6xl text-4xl relative">
              <span className="font-semibold text-red-500 ">Bright Tech</span> est une agence
              de conception UI/UX et de branding à Abidjan.
            </h2>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}


