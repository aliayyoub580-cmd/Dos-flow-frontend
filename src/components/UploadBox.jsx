/**
 * UploadBox Component
 * Drag-and-drop file upload interface
 */

import React, { useRef } from "react";
import { formatFileSize } from "../utils/fileValidation";

export default function UploadBox({ onFileSelect, tool, disabled = false }) {
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div
      ref={dropZoneRef}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      className={`
        border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition
        ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInputChange}
        accept={tool?.inputFormats?.join(",")}
        className="hidden"
        disabled={disabled}
      />

      <div className="text-5xl mb-4">📤</div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Drop your file here or click to upload
      </h3>

      <p className="text-gray-600 mb-4">
        {tool?.inputFormats?.join(", ") || "No formats specified"}
      </p>

      <p className="text-sm text-gray-500">
        Maximum file size: {tool?.maxFileSizeMB || 50} MB
      </p>
    </div>
  );
}
