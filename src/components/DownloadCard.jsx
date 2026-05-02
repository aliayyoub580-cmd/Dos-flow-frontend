/**
 * DownloadCard Component
 * Displays download result after successful conversion
 */

import React from "react";
import { formatFileName } from "../utils/fileValidation";

export default function DownloadCard({ filename, outputFormat, downloadUrl, onConvertAnother }) {
  const downloadedFilename = formatFileName(filename, outputFormat);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadedFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
      <div className="text-5xl mb-4">✓</div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">Your file is ready!</h3>

      <p className="text-gray-600 mb-6">
        Your converted file is ready to download. It will be automatically deleted after 1 hour.
      </p>

      <div className="bg-white rounded-lg p-4 mb-6 inline-block">
        <p className="text-sm text-gray-600 mb-1">Filename</p>
        <p className="font-mono text-lg font-semibold text-gray-900">{downloadedFilename}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          📥 Download File
        </button>

        <button
          onClick={onConvertAnother}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          🔄 Convert Another File
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        🔒 Your file is encrypted and will be automatically deleted after 1 hour.
      </p>
    </div>
  );
}
