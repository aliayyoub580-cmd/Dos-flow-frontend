/**
 * FAQSection Component
 */

import React, { useState } from "react";

export default function FAQSection({ items }) {
  const [expanded, setExpanded] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === index ? -1 : index)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium text-gray-900 text-left">{item.q}</p>
              <span className="text-gray-600 flex-shrink-0 ml-4">
                {expanded === index ? "−" : "+"}
              </span>
            </button>

            {expanded === index && (
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <p className="text-gray-700 text-sm">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
