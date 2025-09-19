import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Help Center", "Learning Center", "Contact Us", "Rates"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {["Who We Are", "Awards", "Partnerships", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Lower Menu */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            {["Privacy", "Legal", "Security", "Accessibility", "AdChoices"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-center">
            © {new Date().getFullYear()} BankName. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
