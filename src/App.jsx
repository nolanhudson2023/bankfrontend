import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import BillPay from "./components/BillPay";
import Cards from "./components/Cards";
import Profile from "./components/Profile";
import Login from "./components/Login";
import GetHelp from "./components/GetHelp";
import AdminDashboard from "./components/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import { api } from "./api";
import CookieConsent from "./components/CookieConsent";
import PublicLayout from "./components/PublicLayout";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("bankToken");
    if (token) {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const userData = await api.get("/auth/me");
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("bankToken");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData.user);
    localStorage.setItem("bankToken", userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("bankToken");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainContent />} />
          {!user ? (
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          ) : null}
          <Route
            path="/signup"
            element={<Login onLogin={handleLogin} isLogin={false} />}
          />
        </Route>
        {/* Protected Routes */}
        {user ? (
          <>
            <Route
              path="/dashboard"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Dashboard user={user} />
                </Layout>
              }
            />
            <Route
              path="/accounts"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Accounts user={user} />
                </Layout>
              }
            />
            <Route
              path="/transactions"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Transactions user={user} />
                </Layout>
              }
            />
            <Route
              path="/transfer"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Transfer user={user} />
                </Layout>
              }
            />
            <Route
              path="/billpay"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <BillPay user={user} />
                </Layout>
              }
            />
            <Route
              path="/cards"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Cards user={user} />
                </Layout>
              }
            />
            {/* <Route
              path="/investments"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Investments user={user} />
                </Layout>
              }
            /> */}
            <Route
              path="/help"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <GetHelp user={user} />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout user={user} onLogout={handleLogout}>
                  <Profile user={user} onUpdate={fetchUserData} />
                </Layout>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminRoute user={user}>
                  <Layout user={user} onLogout={handleLogout}>
                    <AdminDashboard user={user} />
                  </Layout>
                </AdminRoute>
              }
            />

            {/* Catch all */}
            <Route
              path="*"
              element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
            />
          </>
        ) : (
          // Redirect if not logged in
          <Route
            path="*"
            element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
          />
        )}
      </Routes>
      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;

const Layout = ({ children, user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={onLogout}
        user={user}
      />
      <div className="flex-1 flex flex-col">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          user={user}
          onLogout={onLogout}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};
