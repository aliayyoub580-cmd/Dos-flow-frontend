/**
 * Custom hook for file conversion logic
 */

import { useState, useCallback, useEffect } from "react";
import * as api from "../services/api";

export const useConversion = () => {
  const [file, setFile] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, uploading, processing, completed, failed
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  /**
   * Handle file selection
   */
  const handleFileSelect = useCallback((selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setStatus("idle");
      setProgress(0);
    }
  }, []);

  /**
   * Handle file removal
   */
  const handleFileRemove = useCallback(() => {
    setFile(null);
    setJobId(null);
    setStatus("idle");
    setProgress(0);
    setError(null);
    setDownloadUrl(null);
  }, []);

  /**
   * Start conversion
   */
  const startConversion = useCallback(async (toolId) => {
    if (!file) {
      setError("Please select a file");
      return;
    }

    try {
      setStatus("uploading");
      setError(null);
      setProgress(0);

      const response = await api.createConversionJob(
        file,
        toolId,
        (uploadProgress) => {
          setProgress(uploadProgress);
        }
      );

      setJobId(response.jobId);
      setStatus("processing");
      setProgress(10); // Start at 10% after upload

      // Poll job status
      pollJobStatus(response.jobId);
    } catch (err) {
      setStatus("failed");
      setError(err.message || "Conversion failed");
    }
  }, [file]);

  /**
   * Poll job status
   */
  const pollJobStatus = useCallback((id) => {
    const interval = setInterval(async () => {
      try {
        const response = await api.getJobStatus(id);

        if (response.status === "completed") {
          setStatus("completed");
          setProgress(100);
          setDownloadUrl(await api.getDownloadUrl(id));
          clearInterval(interval);
        } else if (response.status === "failed") {
          setStatus("failed");
          setError(response.message || "Conversion failed");
          clearInterval(interval);
        } else if (response.status === "processing") {
          setProgress(response.progress || 50);
        }
      } catch (err) {
        console.error("Status check error:", err);
      }
    }, 2000); // Poll every 2 seconds

    return interval;
  }, []);

  /**
   * Reset conversion
   */
  const resetConversion = useCallback(() => {
    setFile(null);
    setJobId(null);
    setStatus("idle");
    setProgress(0);
    setError(null);
    setDownloadUrl(null);
  }, []);

  /**
   * Get display status
   */
  const getDisplayStatus = useCallback(() => {
    switch (status) {
      case "idle":
        return "Ready to convert";
      case "uploading":
        return "Uploading your file...";
      case "processing":
        return "Converting your file...";
      case "completed":
        return "Your file is ready";
      case "failed":
        return "Conversion failed";
      default:
        return "Processing";
    }
  }, [status]);

  return {
    file,
    jobId,
    status,
    progress,
    error,
    downloadUrl,
    handleFileSelect,
    handleFileRemove,
    startConversion,
    resetConversion,
    getDisplayStatus
  };
};

export default useConversion;
