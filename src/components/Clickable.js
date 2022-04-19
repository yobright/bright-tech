import React, { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import ScrollAnimation from "react-animate-on-scroll";

const items = [
  "Web Design & Branding",
  "Notre équipe de conception vous aide à créer un produit attrayant, facilement et rapidement. On vous accompagne dans la mise en place de vos outils de communication",
  "Service de Développement",
  "Nous créons des sites web de haut niveau, réactifs qui se sentent à l'aise sur n'importe quel appareil",
];
const config = { mass: 5, tension: 1000, friction: 200 };

export default function Clickable() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 1,
    x: toggle ? 1 : 50,
    height: toggle ? 580 : 580,
    from: { opacity: 0, x: 20, height: 80 },
  });

  return (
    <div className="p-6 mb-8">
      <span className="text-gray-900 bg-gray-200 px-2 py-1 rounded-md text-xs uppercase cursor-pointer">
        Services{" "}
      </span>

      <div
        className="max-w-full mx-auto"
        onClick={() => set((state) => !state)}
      >
        {trail.map(({ x, height, ...rest }, index) => (
          <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
            <a.div
              key={items[index]}
              className={`mb-4 mt-2 border bg-gray-100 text-gray-900 px-3 py-2 cursor-pointer`}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <a.div
                className={`${
                  toggle === true ? "opacity-50" : "opacity-100"
                } text-3xl md:text-5xl lg:text-4xl`}
              >
                {items[index]}
              </a.div>
            </a.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
