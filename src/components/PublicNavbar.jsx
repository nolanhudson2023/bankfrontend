import { useState } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Help", link: "/help" },
    { name: "Rates", link: "/rates" },
  ];

  const mainNav = [
    { name: "Save", link: "/personal/save" },
    { name: "Spend", link: "/personal/checking" },
    { name: "Invest", link: "/personal/investing" },
    { name: "Borrow", link: "/personal/credit" },
  ];

  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section - Logo + Menu Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-orange-600">
              <img src={logo} className="h-15" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              {mainNav.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Search + Auth */}
          <div className="flex items-center space-x-4">
            {/* Search Icon Button */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Auth Buttons */}
            <a
              href="/login"
              className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 font-medium"
            >
              Login
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Slide in from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="px-4 py-4 space-y-4 flex-grow">
          {mainNav.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
            >
              <a href={item.link}>
                <span>{item.name}</span>
              </a>
              <ChevronRight className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Bottom Menu */}
        <div className="px-4 py-4 border-t space-y-4">
          {navItems.map((items, index) => (
            <a
              key={index}
              href={items.link}
              className="block text-gray-700 hover:text-orange-600 font-medium"
            >
              {items.name}
            </a>
          ))}

          {/* Auth at the bottom */}
          <div className="flex flex-col space-y-3 pt-4">
            <a
              href="/login"
              className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 font-medium text-center"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
