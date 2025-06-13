import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get userEmail from localStorage if present
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
    else setUserEmail(null);
  }, []);

  const handleLogout = () => {
    // Clear user info from localStorage on logout
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setUserEmail(null);
    navigate("/login"); // Redirect to login page
  };

  // Capitalize first letter of email username (before @)
  const formatEmail = (email) => {
    if (!email) return "";
    const [name, domain] = email.split("@");
    if (!name || !domain) return email;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return `${capitalized}@${domain}`;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">Online Shopping</h1>
          </div>

          {/* Desktop Menu (visible on lg and up) */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
              Home
            </Link>

            {!userEmail && (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-500 font-medium">
                  Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-blue-500 font-medium">
                  Register
                </Link>
              </>
            )}

            <Link to="/about" className="text-gray-700 hover:text-blue-500 font-medium">
              About
            </Link>

            {userEmail && (
              <>
                <span className="text-gray-800 font-semibold">
                  {formatEmail(userEmail)}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-sm transition"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart Icon */}
            <Link to="/cart" className="text-gray-700 hover:text-blue-500 relative">
              <FiShoppingCart size={24} />
            </Link>
          </div>

          {/* Hamburger Icon (visible on mobile + tablet) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-sm">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            Home
          </Link>

          {!userEmail && (
            <>
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Register
              </Link>
            </>
          )}

          <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
            About
          </Link>

          {userEmail && (
            <>
              <div className="px-4 py-2 text-gray-800 font-semibold">
                {formatEmail(userEmail)}
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                Logout
              </button>
            </>
          )}

          <Link
            to="/cart"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 flex items-center gap-2"
          >
            <FiShoppingCart size={20} />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
