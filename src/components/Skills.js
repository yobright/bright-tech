import React from 'react'
import { InView } from "react-intersection-observer";
import ScrollAnimation from "react-animate-on-scroll";

function Skills() {
  const [setInView] = React.useState(false);

  return (
    <div className="bg-black text-white">
      <div className="text-center min-h-screen max-w-5xl mx-auto px-6 lg:px-18 py-24 md:py-28 lg:py-20 flex flex-col text-4xl md:text-6xl lg:text-7xl sm:text-7xl font-semibold ">
        <div className="">
          <InView onChange={setInView} threshold={1}>
            {({ ref, inView, entry }) => (
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <span
                  ref={ref}
                  className={`${
                    inView === true ? "opacity-100" : "opacity-25"
                  } `}
                >
                  Nous connaissons parfaitement nos outils.
                </span>
              </ScrollAnimation>
            )}
          </InView>
          <InView onChange={setInView} threshold={0.9}>
            {({ ref, inView, entry }) => (
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <span
                  ref={ref}
                  className={`${inView === true ? "opacity-75" : "opacity-25"}`}
                >
                  {" "}
                  Qu'il s'agisse d'une application destinée au grand public ou
                  d'une solution d'entreprise transformatrice,
                </span>
              </ScrollAnimation>
            )}
          </InView>
          <InView onChange={setInView} threshold={0.9}>
            {({ ref, inView, entry }) => (
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <span
                  ref={ref}
                  className={`${inView === true ? "opacity-75" : "opacity-25"}`}
                >
                  {" "}
                  nous dirigeons le processus, de l'idéation et du concept à la
                  livraison, et fournissons un soutien continu. <br />
                </span>
              </ScrollAnimation>
            )}
          </InView>
          <InView onChange={setInView} threshold={1}>
            {({ ref, inView, entry }) => (
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <span
                  ref={ref}
                  className={`${
                    inView === true ? "opacity-100" : "opacity-25"
                  } text-red-200`}
                >
                  {" "}
                  Les expériences utilisateur de qualité sont intuitives.
                </span>
              </ScrollAnimation>
            )}
          </InView>
          <InView onChange={setInView} threshold={1}>
            {({ ref, inView, entry }) => (
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <span
                  ref={ref}
                  className={`${inView === true ? "opacity-75" : "opacity-25"}`}
                >
                  {" "}
                  Nous nous rapprochons de vos clients pour savoir ce dont ils
                  ont besoin. Puis, nous concevons des solutions pour une
                  adoption, un engagement et un plaisir maximum.
                </span>
              </ScrollAnimation>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
}

export default Skills