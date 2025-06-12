import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h1 className="text-xl font-bold text-blue-400 mb-2">Online Shopping</h1>
          <p className="text-gray-300 text-sm">
            A modern app built with love and designed for all screens.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
            <li><a href="/register" className="hover:text-white">Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: support@myapp.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Address: City, Country</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Online Shopping. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
