/**
 * ToolPage - Dynamic tool conversion page
 */

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getToolBySlug, getRelatedTools } from "../config/tools";
import useConversion from "../hooks/useConversion";
import UploadBox from "../components/UploadBox";
import FilePreview from "../components/FilePreview";
import ProgressBar from "../components/ProgressBar";
import DownloadCard from "../components/DownloadCard";
import ErrorAlert from "../components/ErrorAlert";
import FAQSection from "../components/FAQSection";
import RelatedTools from "../components/RelatedTools";
import { validateFile } from "../utils/fileValidation";

export default function ToolPage() {
  const { toolSlug } = useParams();
  const navigate = useNavigate();
  const tool = getToolBySlug(toolSlug);

  const {
    file,
    status,
    progress,
    error,
    downloadUrl,
    handleFileSelect,
    handleFileRemove,
    startConversion,
    resetConversion,
    getDisplayStatus
  } = useConversion();

  useEffect(() => {
    if (!tool) {
      navigate("/tools");
    }
  }, [tool, navigate]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  const relatedTools = getRelatedTools(toolSlug);

  const handleFileSelectionWithValidation = (selectedFile) => {
    const errors = validateFile(selectedFile, tool);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    handleFileSelect(selectedFile);
  };

  const handleConvertClick = async () => {
    await startConversion(tool.id);
  };

  const isConversionInProgress = status === "uploading" || status === "processing";

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{tool.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{tool.name}</h1>
              <p className="text-gray-600 mt-1">{tool.description}</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 bg-gray-100 rounded-lg p-4">
            <p className="mb-2">
              <strong>From:</strong> {tool.inputFormats.join(", ")} → <strong>To:</strong>{" "}
              {tool.outputFormat}
            </p>
            <p>
              <strong>Maximum file size:</strong> {tool.maxFileSizeMB} MB
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && <ErrorAlert error={error} onDismiss={() => resetConversion()} />}

        {/* Main Conversion Interface */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {status === "completed" && downloadUrl ? (
            <DownloadCard
              filename={file.name}
              outputFormat={tool.outputFormat}
              downloadUrl={downloadUrl}
              onConvertAnother={resetConversion}
            />
          ) : (
            <>
              {/* Upload Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step 1: Select File</h2>
                {file ? (
                  <div className="space-y-4">
                    <FilePreview
                      file={file}
                      onRemove={handleFileRemove}
                      showRemove={!isConversionInProgress}
                    />
                  </div>
                ) : (
                  <UploadBox
                    onFileSelect={handleFileSelectionWithValidation}
                    tool={tool}
                    disabled={isConversionInProgress}
                  />
                )}
              </div>

              {/* Progress Section */}
              {isConversionInProgress && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Step 2: Converting
                  </h2>
                  <ProgressBar progress={progress} status={status} />
                </div>
              )}

              {/* Convert Button */}
              {file && status === "idle" && (
                <div className="flex gap-4">
                  <button
                    onClick={handleConvertClick}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
                  >
                    🚀 Convert File
                  </button>

                  <button
                    onClick={handleFileRemove}
                    className="px-6 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold rounded-lg transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* FAQ Section */}
        <FAQSection items={tool.faq} />

        {/* Related Tools */}
        {relatedTools.length > 0 && <RelatedTools tools={relatedTools} />}
      </div>
    </div>
  );
}
