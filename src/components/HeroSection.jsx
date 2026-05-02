/**
 * HeroSection Component
 */

import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Convert Your Files Instantly
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Fast, simple, and secure file conversions. No installation required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/tools"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition text-lg"
          >
            Choose Tool →
          </Link>

          <Link
            to="/tools"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-lg transition text-lg border border-white"
          >
            View All Tools
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span>Ultra Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>No Installation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
