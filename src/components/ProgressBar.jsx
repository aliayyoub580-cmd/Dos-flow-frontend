/**
 * ProgressBar Component
 */

import React from "react";

export default function ProgressBar({ progress = 0, status = "processing" }) {
  const getStatusColor = () => {
    switch (status) {
      case "uploading":
      case "processing":
        return "bg-blue-600";
      case "completed":
        return "bg-green-600";
      case "failed":
        return "bg-red-600";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case "uploading":
        return "Uploading...";
      case "processing":
        return "Converting...";
      case "completed":
        return "Completed!";
      case "failed":
        return "Failed";
      default:
        return "Processing...";
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{getStatusMessage()}</span>
        <span className="text-sm font-medium text-gray-700">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${getStatusColor()}`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}
