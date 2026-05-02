/**
 * File validation utilities
 */

export const validateFile = (file, tool) => {
  const errors = [];

  if (!file) {
    errors.push("Please select a file");
    return errors;
  }

  // Validate file existence
  if (!file.name) {
    errors.push("Invalid file");
    return errors;
  }

  // Get file extension
  const fileExtension = "." + file.name.split(".").pop().toLowerCase();

  // Validate extension
  if (!tool.inputFormats.includes(fileExtension)) {
    errors.push(
      `Invalid file type. Allowed formats: ${tool.inputFormats.join(", ")}`
    );
  }

  // Validate MIME type
  if (tool.mimeTypes && !tool.mimeTypes.includes(file.type)) {
    errors.push(`Invalid file type. Expected: ${tool.mimeTypes.join(", ")}`);
  }

  // Validate file size
  const fileSizeMB = file.size / (1024 * 1024);
  if (fileSizeMB > tool.maxFileSizeMB) {
    errors.push(
      `File is too large. Maximum size: ${tool.maxFileSizeMB} MB (Your file: ${fileSizeMB.toFixed(
        2
      )} MB)`
    );
  }

  return errors;
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
};

export const getFileExtension = (filename) => {
  return "." + filename.split(".").pop().toLowerCase();
};

export const getFileName = (filename) => {
  return filename.split(".").slice(0, -1).join(".");
};

export const formatFileName = (filename, outputFormat) => {
  return getFileName(filename) + outputFormat;
};

export default {
  validateFile,
  formatFileSize,
  getFileExtension,
  getFileName,
  formatFileName
};
