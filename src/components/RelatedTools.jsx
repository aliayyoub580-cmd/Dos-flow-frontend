/**
 * RelatedTools Component
 * Shows tools related to the current conversion
 */

import React from "react";
import ToolCard from "./ToolCard";

export default function RelatedTools({ tools }) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
