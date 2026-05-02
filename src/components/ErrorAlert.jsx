/**
 * ErrorAlert Component
 */

import React from "react";

export default function ErrorAlert({ error, onDismiss }) {
  if (!error) return null;

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-4">
      <span className="text-2xl flex-shrink-0">✕</span>
      <div className="flex-grow">
        <h4 className="font-semibold text-red-900 mb-1">Error</h4>
        <p className="text-red-800 text-sm">{error}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-600 hover:text-red-700 font-bold flex-shrink-0"
        >
          ✕
        </button>
      )}
    </div>
  );
}
