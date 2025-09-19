// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg z-50">
      <p className="text-sm">
        We use cookies to enhance your browsing experience. By clicking
        "Accept", you agree to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
