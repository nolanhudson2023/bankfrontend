import React from "react";

const Stats = () => {
  const stats = [
    { value: "$9 Billion+", label: "Interest paid to Customers" },
    { value: "2 Million+", label: "Business name Clients" },
    { value: "$0", label: "Daily banking fees" },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-4xl font-extrabold text-orange-600">
                {stat.value}
              </h2>
              <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
