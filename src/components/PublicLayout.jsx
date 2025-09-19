// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./PublicNavbar";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* public pages go here */}
      </main>
    </div>
  );
};

export default PublicLayout;
