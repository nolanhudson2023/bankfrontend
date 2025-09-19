import React from "react";
import deviceImg from "../../assets/device.png"; // placeholder image

const DeviceSection = () => {
  return (
   <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Spend Smart and Confidently
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
       No matter what device, we’ve got you covered. Add your Tangerine Client Card with Visa Debit and Credit Card to your mobile wallet and use it where contactless payments are accepted.
        </p>

        {/* Image */}
        <div className="mt-6">
          <img
            src={deviceImg}
            alt="Credit Placeholder"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
