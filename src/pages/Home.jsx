/**
 * Home Page
 */

import React from "react";
import HeroSection from "../components/HeroSection";
import ToolGrid from "../components/ToolGrid";
import { TOOLS, getToolsByCategory } from "../config/tools";

export default function HomePage() {
  // Get popular tools
  const popularToolIds = [
    "pdf-to-word",
    "word-to-pdf",
    "pdf-to-excel",
    "excel-to-pdf",
    "image-to-pdf",
    "pdf-to-jpg",
    "jpg-to-png",
    "png-to-jpg"
  ];

  const popularTools = popularToolIds
    .map((id) => TOOLS.find((tool) => tool.id === id))
    .filter(Boolean);

  const categories = ["PDF", "Office", "Image"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Tools</h2>
        <p className="text-gray-600 mb-8">Start converting with our most-used tools</p>
        <ToolGrid tools={popularTools} />
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category} className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{category} Tools</h2>
            <p className="text-gray-600 mb-8">
              Convert {category.toLowerCase()} files easily and quickly
            </p>
            <ToolGrid tools={getToolsByCategory(category)} />
          </div>
        </div>
      ))}

      {/* Trust Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose DocFlow Pro?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Convert files in seconds. Optimized for speed and efficiency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Secure</h3>
              <p className="text-gray-600">
                Your files are encrypted and automatically deleted after 1 hour.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Works Everywhere</h3>
              <p className="text-gray-600">
                No installation. Works on mobile, tablet, and desktop browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
