/**
 * ToolGrid Component
 */

import React from "react";
import ToolCard from "./ToolCard";

export default function ToolGrid({ tools, title = null }) {
  if (!tools || tools.length === 0) {
    return <div className="text-center py-12 text-gray-500">No tools available</div>;
  }

  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
