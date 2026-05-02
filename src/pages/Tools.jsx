/**
 * Tools Page - Shows all available tools
 */

import React, { useState } from "react";
import ToolGrid from "../components/ToolGrid";
import { TOOLS, getCategories, getToolsByCategory } from "../config/tools";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = getCategories();

  const displayTools = selectedCategory
    ? getToolsByCategory(selectedCategory)
    : TOOLS;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tools</h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose from {TOOLS.length} different file conversion tools
        </p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            All Tools ({TOOLS.length})
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category} ({getToolsByCategory(category).length})
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <ToolGrid tools={displayTools} />
      </div>
    </div>
  );
}
