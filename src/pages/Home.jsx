import React from "react";
import useSEO from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Homepage",
    description: "The Private Lending and Finance Firm of First Kevington",
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the homepage</h1>
    </div>
  );
};

export default Home;
