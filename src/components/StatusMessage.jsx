/**
 * StatusMessage Component
 */

import React from "react";

export default function StatusMessage({ status, message }) {
  const getIcon = () => {
    switch (status) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
        return "ℹ";
      default:
        return "•";
    }
  };

  const getStyles = () => {
    switch (status) {
      case "success":
        return "bg-green-50 text-green-800 border-green-200";
      case "error":
        return "bg-red-50 text-red-800 border-red-200";
      case "warning":
        return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "info":
        return "bg-blue-50 text-blue-800 border-blue-200";
      default:
        return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className={`border rounded-lg p-4 flex items-center gap-3 ${getStyles()}`}>
      <span className="text-xl font-bold">{getIcon()}</span>
      <p className="flex-grow">{message}</p>
    </div>
  );
}
