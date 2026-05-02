/**
 * ToolCard Component
 */

import React from "react";
import { Link } from "react-router-dom";

export default function ToolCard({ tool }) {
  return (
    <Link to={`/tools/${tool.slug}`}>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition cursor-pointer h-full flex flex-col">
        {/* Icon */}
        <div className="text-5xl mb-4">{tool.icon}</div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">{tool.description}</p>

        {/* Formats */}
        <div className="text-xs text-gray-500 mb-4">
          <p className="mb-1">
            <strong>From:</strong> {tool.inputFormats.join(", ")}
          </p>
          <p>
            <strong>To:</strong> {tool.outputFormat}
          </p>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
          Convert Now →
        </button>
      </div>
    </Link>
  );
}
