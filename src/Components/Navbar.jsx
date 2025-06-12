import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">Online Shopping</h1>
          </div>

          {/* Desktop Menu (visible on lg and up) */}
          <div className="hidden lg:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
            <a href="/login" className="text-gray-700 hover:text-blue-500 font-medium">Login</a>
            <a href="/register" className="text-gray-700 hover:text-blue-500 font-medium">Register</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
          </div>

          {/* Hamburger Icon (visible on mobile + tablet) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
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
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</a>
          <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Login</a>
          <a href="/register" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Register</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About</a>
        </div>
      )}
    </nav>
  );
}
