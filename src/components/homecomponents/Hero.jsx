import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Move your pay. Get $250
            </h1>

            <h3 className="text-lg sm:text-xl font-medium mb-8">
              What? Were you expecting something more complicated?
            </h3>

            <a
              href="#"
              className="inline-block bg-white text-orange-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={hero}
              alt="Hero Placeholder"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
