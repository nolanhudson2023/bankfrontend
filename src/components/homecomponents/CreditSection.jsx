import React from "react";
import creditImg from "../../assets/credit.webp"; // placeholder image

const CreditSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Put your credit into view
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Checking your credit score while managing your money is easy. Get a
          view into your credit history, active accounts and more, all while
          logged in with us.
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition mb-12"
        >
          Learn More
        </a>

        {/* Image */}
        <div className="mt-6">
          <img
            src={creditImg}
            alt="Credit Placeholder"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CreditSection;
