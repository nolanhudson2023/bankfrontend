import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const bentoItems = [
  {
    title: "Savings",
    desc: "Grow your money and save for your goals",
    img: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=800&q=80",
    link: "/personal/save",
  },
  {
    title: "Chequing",
    desc: "No-fee daily chequing",
    img: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=800&q=80",
    link: "/personal/checking",
  },
  {
    title: "Investing",
    desc: "Do your future a favour",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    link: "/personal/investing",
  },
  {
    title: "Credit Cards",
    desc: "Money-Back Rewards on everyday purchases",
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80",
    link: "/personal/credit",
  },
  {
    title: "GICs",
    desc: "Great guaranteed interest rate",
    img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80",
    link: "/personal/gic",
  },
  {
    title: "Offers",
    desc: "Take advantage of our current bank offers",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
    link: "/personal/offers",
  },
];

const BentoMenu = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What can we help you with today?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of banking services to help live better lives
          and reach their financial goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {bentoItems.map((item, index) => (
          <div
            key={index}
            className="relative group h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-left text-white">
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
              <Link to={item.link}>
                <button className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow transition hover:bg-orange-500 hover:text-white">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoMenu;
