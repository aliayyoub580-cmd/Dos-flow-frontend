/**
 * API Service for frontend
 * Handles all communication with backend
 */

const rawApiUrl = (import.meta.env.VITE_API_URL || "").trim();

const normalizeApiBaseUrl = (value) => {
  if (!value) return "";

  const trimmed = value.replace(/\/+$/, "");
  const withScheme = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withScheme.endsWith("/api") ? withScheme : `${withScheme}/api`;
};

const resolveApiBaseUrl = () => {
  if (rawApiUrl) {
    return normalizeApiBaseUrl(rawApiUrl);
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5000/api";
  }

  // In production, avoid a localhost fallback that causes browser network errors.
  return "/api";
};

const API_BASE_URL = resolveApiBaseUrl();

/**
 * Get all available tools
 */
export const getTools = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tools`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw new Error("Failed to fetch tools");
    return await response.json();
  } catch (error) {
    console.error("Error fetching tools:", error);
    throw error;
  }
};

/**
 * Create a conversion job
 * @param {File} file - File to convert
 * @param {string} toolId - Tool ID to use
 * @param {Function} onProgress - Progress callback
 */
export const createConversionJob = async (file, toolId, onProgress = null) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tool", toolId);

    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      // Track upload progress
      if (onProgress) {
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            onProgress(percentComplete);
          }
        });
      }

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          try {
            const payload = JSON.parse(xhr.responseText);
            reject(new Error(payload?.error || payload?.message || "Conversion failed"));
          } catch {
            reject(new Error(xhr.responseText || "Conversion failed"));
          }
        }
      });

      xhr.addEventListener("error", () => {
        reject(new Error("Network error"));
      });

      xhr.open("POST", `${API_BASE_URL}/convert`);
      xhr.send(formData);
    });
  } catch (error) {
    console.error("Error creating conversion job:", error);
    throw error;
  }
};

/**
 * Get job status
 * @param {string} jobId - Job ID
 */
export const getJobStatus = async (jobId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw new Error("Failed to fetch job status");
    return await response.json();
  } catch (error) {
    console.error("Error fetching job status:", error);
    throw error;
  }
};

/**
 * Get download URL
 * @param {string} jobId - Job ID
 */
export const getDownloadUrl = async (jobId) => {
  try {
    return `${API_BASE_URL}/download/${jobId}`;
  } catch (error) {
    console.error("Error getting download URL:", error);
    throw error;
  }
};

/**
 * Check API health
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw new Error("Health check failed");
    return await response.json();
  } catch (error) {
    console.error("Health check failed:", error);
    throw error;
  }
};

export default {
  getTools,
  createConversionJob,
  getJobStatus,
  getDownloadUrl,
  checkHealth
};
