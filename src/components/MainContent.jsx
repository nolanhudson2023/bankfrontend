// src/components/MainContent.jsx
import React from "react";
import Hero from "./homecomponents/Hero";
import Stats from "./homecomponents/Stats";
import BentoMenu from "./homecomponents/BentoMenu";
import CreditSection from "./homecomponents/CreditSection";
import DeviceSection from "./homecomponents/DeviceSection";
import SecuritySection from "./homecomponents/SecuritySection";
import useSEO from "../hooks/useSEO";

const MainContent = () => {
  useSEO({
    title: "Homepage",
    description: "The Private Lending and Finance Firm of First Kevington",
  });

  return (
    <>
      <Hero />
      <Stats />
      <BentoMenu />
      <CreditSection />
      <DeviceSection />
      <SecuritySection />
    </>
  );
};

export default MainContent;
