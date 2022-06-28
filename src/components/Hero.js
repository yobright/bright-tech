import React from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import  ScrollAnimation  from "react-animate-on-scroll";

function Hero() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-justify">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2 className="tracking-tight text-gray-900 sm:text-6xl text-4xl ">
              Le meilleur <br />
              <TextLoop springConfig={{ stiffness: 80, damping: 10 }}>
                <span className="text-red-600">de la stratégie</span>
                <span className="text-red-700">du design</span>
                <span className="text-red-800">et de l'ingénierie</span>
              </TextLoop>{" "}
              <br /> pour vous aider à concevoir, planifier, tester et
              construire des produits numériques à partir de zéro.
            </h2>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Hero;
