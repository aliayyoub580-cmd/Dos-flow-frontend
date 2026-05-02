/**
 * Category Page - PDF/Office/Image tools
 */

import React from "react";
import { useParams } from "react-router-dom";
import ToolGrid from "../components/ToolGrid";
import { getToolsByCategory } from "../config/tools";
import logoUrl from "../../logo.svg";

export default function CategoryPage({ category: categoryProp }) {
  const { category } = useParams();

  const categoryMap = {
    "pdf-tools": "PDF",
    "office-tools": "Office",
    "image-tools": "Image"
  };

  const categoryName = categoryMap[categoryProp] || categoryMap[category] || "Tools";
  const tools = getToolsByCategory(categoryName);

  const getCategoryIcon = () => {
    switch (categoryName) {
      case "PDF":
        return "📄";
      case "Office":
        return "📊";
      case "Image":
        return "🖼️";
      default:
        return <img src={logoUrl} alt="DocFlow Pro" className="h-5 w-5 object-contain" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="mr-4 inline-flex align-middle">{getCategoryIcon()}</span>
            {categoryName} Tools
          </h1>
          <p className="text-xl text-gray-600">
            Convert {categoryName.toLowerCase()} files with our collection of online tools
          </p>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <ToolGrid tools={tools} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tools found for {categoryName.toLowerCase()}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
