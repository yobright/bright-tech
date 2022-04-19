import ScrollAnimation from "react-animate-on-scroll";

export default function HomeCta() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:items-center ">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
            <span className="block">Grandissons ensemble !</span>
            <span className="block text-red-400">
              Conctactez-nous maintenant pour obtenir une offre sur mésure selon
              vos bésoins.
            </span>
          </h2>

          <a
            href="/contact"
            className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-xs uppercase cursor-pointer"
          >
            Entrer en contact{" "}
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
}
