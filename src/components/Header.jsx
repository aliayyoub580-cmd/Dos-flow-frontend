/**
 * Header Component
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-29 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-blue-600">
          <span className="flex items-center gap-3">
            <img src={logoUrl} alt="DocFlow Pro" className="h-24 w-24 object-contain" />
            <span className="text-[1.7rem] leading-none">DocFlow Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/tools" className="text-gray-700 hover:text-blue-600 transition">
            All Tools
          </Link>
          <Link to="/pdf-tools" className="text-gray-700 hover:text-blue-600 transition">
            PDF
          </Link>
          <Link to="/office-tools" className="text-gray-700 hover:text-blue-600 transition">
            Office
          </Link>
          <Link to="/image-tools" className="text-gray-700 hover:text-blue-600 transition">
            Images
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tools"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Tools
          </Link>
          <Link
            to="/pdf-tools"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            PDF Tools
          </Link>
          <Link
            to="/office-tools"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Office Tools
          </Link>
          <Link
            to="/image-tools"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Image Tools
          </Link>
        </div>
      )}
    </header>
  );
}
