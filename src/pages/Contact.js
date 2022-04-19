import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h2 className="tracking-tight text-gray-900 sm:text-7xl text-4xl ">
              Prêt à travailler ensemble ?
            </h2>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <p className="text-2xl mt-8">
            Merci de votre intérêt à travailler avec nous. Vous pouvez nous
            joindre grâce aux adresses ci-dessous et nous vous répondrons dans un
            délai d'un jour ouvrable.
          </p>
        </ScrollAnimation>
        
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <div className="text-center mt-8 sm:w-1/2 mx-auto py-20">
          <span className="text-gray-900 bg-gray-200 px-3 py-2 rounded-md text-xs uppercase cursor-pointer ">
            Adresse de l'entreprise{" "}
          </span>
          <p className=" text-sm w-2/3 sm:w-4/3 mx-auto m-8 py-6  uppercase  border rounded-md bg-gray-50">
            Bright Tech <br />
            Abidjan, Côte d'Ivoire <br />
            (225) 07-897-381-86
            <br />
          </p>
        </div>
      </ScrollAnimation>
      
    </div>
  );
}

export default Contact;
