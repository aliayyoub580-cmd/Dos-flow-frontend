/**
 * FilePreview Component
 * Shows selected file information
 */

import React from "react";
import { formatFileSize } from "../utils/fileValidation";

export default function FilePreview({ file, onRemove, showRemove = true }) {
  if (!file) return null;

  const getFileIcon = (filename) => {
    const ext = filename.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return "📄";
      case "doc":
      case "docx":
        return "📝";
      case "xls":
      case "xlsx":
        return "📊";
      case "csv":
        return "📋";
      case "txt":
        return "📃";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        return "🖼️";
      case "svg":
        return "✨";
      default:
        return "📁";
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-4xl">{getFileIcon(file.name)}</span>
        <div>
          <p className="font-medium text-gray-900">{file.name}</p>
          <p className="text-sm text-gray-600">{formatFileSize(file.size)}</p>
        </div>
      </div>

      {showRemove && (
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-700 font-medium transition"
        >
          Remove ✕
        </button>
      )}
    </div>
  );
}
