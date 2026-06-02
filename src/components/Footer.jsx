import React from "react";

const Footer = () => {
  const footerNavTwo = [
    { name: "Help Center", link: "/help" },
    { name: "Contact Us", link: "/contact" },
    { name: "Rates", link: "/rates" },
  ];

  const bottomFooter = [
    { name: "Privacy", link: "/privacy" },
    { name: "Legal", link: "/legal" },
    { name: "Security", link: "/security" },
    { name: "Accessibility", link: "/accessibility" },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerNavTwo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Lower Menu */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            {bottomFooter.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-center">
            © {new Date().getFullYear()} First Kevington. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
