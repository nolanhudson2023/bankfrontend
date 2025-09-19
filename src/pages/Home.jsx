import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the homepage</h1>
    </div>
  );
};

export default Home;