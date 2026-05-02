/**
 * Centralized tool configuration for DocFlow Pro
 * Each tool contains metadata, validation, and SEO info
 */

export const TOOLS = [
  // PDF Tools
  {
    id: "pdf-to-word",
    slug: "pdf-to-word",
    name: "PDF to Word",
    category: "PDF",
    icon: "📄",
    description: "Convert PDF files into editable Word documents.",
    inputFormats: [".pdf"],
    outputFormat: ".docx",
    maxFileSizeMB: 50,
    mimeTypes: ["application/pdf"],
    seoTitle: "PDF to Word Converter - Convert PDF to DOCX Online",
    seoDescription: "Convert PDF files to editable Word documents online. Fast, simple, and secure PDF to DOCX converter.",
    faq: [
      { q: "Is this PDF to Word converter free?", a: "Yes, all conversions are free for up to 10 files per hour." },
      { q: "Are my files secure?", a: "Yes, files are encrypted and automatically deleted after 1 hour." },
      { q: "Can I convert scanned PDFs?", a: "Scanned PDFs may not convert perfectly without OCR. Try another file if issues occur." },
      { q: "What is the maximum file size?", a: "The maximum file size is 50 MB." }
    ],
    relatedTools: ["word-to-pdf", "pdf-to-txt", "pdf-to-jpg"]
  },
  {
    id: "word-to-pdf",
    slug: "word-to-pdf",
    name: "Word to PDF",
    category: "PDF",
    icon: "📝",
    description: "Convert DOC or DOCX files into PDF.",
    inputFormats: [".doc", ".docx"],
    outputFormat: ".pdf",
    maxFileSizeMB: 50,
    mimeTypes: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    seoTitle: "Word to PDF Converter - Convert DOCX to PDF Online",
    seoDescription: "Convert Word documents (DOCX, DOC) to PDF online. Fast, free, and secure Word to PDF converter.",
    faq: [
      { q: "Is this converter free?", a: "Yes, completely free. Convert as many files as you need." },
      { q: "Do I need to install software?", a: "No installation needed. Convert directly in your browser." },
      { q: "Will my formatting be preserved?", a: "Yes, formatting is preserved during conversion." },
      { q: "How long does conversion take?", a: "Most files convert within seconds." }
    ],
    relatedTools: ["pdf-to-word", "pdf-to-txt", "excel-to-pdf"]
  },
  {
    id: "pdf-to-excel",
    slug: "pdf-to-excel",
    name: "PDF to Excel",
    category: "PDF",
    icon: "📊",
    description: "Extract data from PDF files into Excel spreadsheets.",
    inputFormats: [".pdf"],
    outputFormat: ".xlsx",
    maxFileSizeMB: 50,
    mimeTypes: ["application/pdf"],
    seoTitle: "PDF to Excel Converter - Convert PDF Tables to XLSX",
    seoDescription: "Convert PDF tables to Excel spreadsheets online. Extract data from PDFs and create editable Excel files.",
    faq: [
      { q: "Can I convert PDFs with tables?", a: "Yes, tables are extracted and formatted in Excel." },
      { q: "What about PDFs with images?", a: "Image-only PDFs may not convert. Use PDFs with text/tables." },
      { q: "Is there a file size limit?", a: "Yes, files must be under 50 MB." },
      { q: "Can I batch convert?", a: "Currently, convert one file at a time. Batch conversion coming soon." }
    ],
    relatedTools: ["excel-to-pdf", "excel-to-csv", "pdf-to-word"]
  },
  {
    id: "excel-to-pdf",
    slug: "excel-to-pdf",
    name: "Excel to PDF",
    category: "PDF",
    icon: "📈",
    description: "Convert XLS or XLSX spreadsheets into PDF.",
    inputFormats: [".xls", ".xlsx"],
    outputFormat: ".pdf",
    maxFileSizeMB: 50,
    mimeTypes: ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    seoTitle: "Excel to PDF Converter - Convert XLSX to PDF Online",
    seoDescription: "Convert Excel spreadsheets to PDF online. Fast and secure XLSX to PDF converter with formatting preserved.",
    faq: [
      { q: "Will my Excel formulas be preserved?", a: "Values are preserved, but formulas become static in PDF." },
      { q: "What about multiple sheets?", a: "All sheets are included in the PDF." },
      { q: "Can I adjust page layout?", a: "Use Excel's print preview to adjust before conversion." },
      { q: "Is conversion fast?", a: "Yes, most files convert within seconds." }
    ],
    relatedTools: ["pdf-to-excel", "excel-to-csv", "word-to-pdf"]
  },
  {
    id: "image-to-pdf",
    slug: "image-to-pdf",
    name: "Image to PDF",
    category: "PDF",
    icon: "🖼️",
    description: "Convert JPG, PNG, or other images into PDF.",
    inputFormats: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
    outputFormat: ".pdf",
    maxFileSizeMB: 20,
    mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
    seoTitle: "Image to PDF Converter - Convert JPG/PNG to PDF",
    seoDescription: "Convert images to PDF online. Fast and free JPG, PNG, and WebP to PDF converter.",
    faq: [
      { q: "Which image formats are supported?", a: "JPG, PNG, GIF, and WebP formats are supported." },
      { q: "Can I convert multiple images?", a: "Convert one image at a time. Combine images in one PDF coming soon." },
      { q: "Will image quality be preserved?", a: "Yes, image quality is preserved in the PDF." },
      { q: "What is the file size limit?", a: "Maximum 20 MB per image." }
    ],
    relatedTools: ["pdf-to-jpg", "pdf-to-png", "jpg-to-png"]
  },
  {
    id: "pdf-to-jpg",
    slug: "pdf-to-jpg",
    name: "PDF to JPG",
    category: "PDF",
    icon: "🎨",
    description: "Convert PDF pages into individual JPG images.",
    inputFormats: [".pdf"],
    outputFormat: ".jpg",
    maxFileSizeMB: 50,
    mimeTypes: ["application/pdf"],
    seoTitle: "PDF to JPG Converter - Convert PDF to JPEG Images",
    seoDescription: "Convert PDF pages to JPG images online. Fast, free PDF to JPEG converter with high quality.",
    faq: [
      { q: "Does each page become a separate image?", a: "Yes, each PDF page converts to one JPG file." },
      { q: "What DPI is used?", a: "Standard 72 DPI for screen viewing. Adjust locally for printing." },
      { q: "Can I convert multi-page PDFs?", a: "Yes, each page becomes a separate JPG file." },
      { q: "Is quality affected?", a: "Quality is preserved. Original PDF resolution determines JPG quality." }
    ],
    relatedTools: ["pdf-to-png", "image-to-pdf", "jpg-to-png"]
  },
  {
    id: "pdf-to-png",
    slug: "pdf-to-png",
    name: "PDF to PNG",
    category: "PDF",
    icon: "📸",
    description: "Convert PDF pages into individual PNG images.",
    inputFormats: [".pdf"],
    outputFormat: ".png",
    maxFileSizeMB: 50,
    mimeTypes: ["application/pdf"],
    seoTitle: "PDF to PNG Converter - Convert PDF to PNG Images",
    seoDescription: "Convert PDF pages to PNG images with transparency support. Free and fast PDF to PNG converter.",
    faq: [
      { q: "What is PNG format best for?", a: "PNG is best for images with transparency and lossless compression." },
      { q: "Can I convert scanned PDFs?", a: "Yes, scanned PDFs convert but may need cleanup." },
      { q: "Are dimensions preserved?", a: "Yes, original PDF dimensions are maintained." },
      { q: "Can I download all images as ZIP?", a: "Coming soon. Currently download images individually." }
    ],
    relatedTools: ["pdf-to-jpg", "image-to-pdf", "png-to-jpg"]
  },
  {
    id: "pdf-to-txt",
    slug: "pdf-to-txt",
    name: "PDF to TXT",
    category: "PDF",
    icon: "📋",
    description: "Extract text from PDF files into plain text.",
    inputFormats: [".pdf"],
    outputFormat: ".txt",
    maxFileSizeMB: 50,
    mimeTypes: ["application/pdf"],
    seoTitle: "PDF to TXT Converter - Extract Text from PDF",
    seoDescription: "Extract text from PDF documents into plain text format. Free PDF to TXT converter online.",
    faq: [
      { q: "Can I extract text from scanned PDFs?", a: "No, scanned PDFs are images. Use OCR for those." },
      { q: "Is formatting preserved?", a: "Basic formatting is preserved. Complex layouts may need cleanup." },
      { q: "What about multi-page PDFs?", a: "All pages are combined into one text file." },
      { q: "Can I edit the text after?", a: "Yes, the output is editable plain text." }
    ],
    relatedTools: ["txt-to-pdf", "pdf-to-word", "pdf-to-docx"]
  },
  {
    id: "txt-to-pdf",
    slug: "txt-to-pdf",
    name: "TXT to PDF",
    category: "PDF",
    icon: "📄",
    description: "Convert plain text files into formatted PDF.",
    inputFormats: [".txt"],
    outputFormat: ".pdf",
    maxFileSizeMB: 10,
    mimeTypes: ["text/plain"],
    seoTitle: "TXT to PDF Converter - Convert Text to PDF",
    seoDescription: "Convert plain text files to PDF format online. Simple and fast TXT to PDF converter.",
    faq: [
      { q: "Will my text formatting be preserved?", a: "Line breaks and spacing are preserved." },
      { q: "What font is used?", a: "Standard PDF font is used. Font can be customized in advanced options." },
      { q: "Can I add images?", a: "Currently text only. Image support coming in future updates." },
      { q: "Is there a file size limit?", a: "Yes, maximum 10 MB for text files." }
    ],
    relatedTools: ["pdf-to-txt", "txt-to-docx", "word-to-pdf"]
  },

  // Office Tools
  {
    id: "excel-to-csv",
    slug: "excel-to-csv",
    name: "Excel to CSV",
    category: "Office",
    icon: "📊",
    description: "Convert Excel spreadsheets to CSV format.",
    inputFormats: [".xls", ".xlsx"],
    outputFormat: ".csv",
    maxFileSizeMB: 50,
    mimeTypes: ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    seoTitle: "Excel to CSV Converter - Convert XLSX to CSV",
    seoDescription: "Convert Excel files to CSV format online. Fast and easy XLSX to CSV converter.",
    faq: [
      { q: "Which sheet is converted?", a: "The first sheet is converted. For other sheets, export manually in Excel." },
      { q: "What delimiter is used?", a: "Standard comma delimiter. Custom delimiters available soon." },
      { q: "Are formulas converted?", a: "Values are exported, formulas are not included." },
      { q: "Is CSV universal?", a: "Yes, CSV can be opened in any spreadsheet application." }
    ],
    relatedTools: ["csv-to-excel", "excel-to-pdf", "pdf-to-excel"]
  },
  {
    id: "csv-to-excel",
    slug: "csv-to-excel",
    name: "CSV to Excel",
    category: "Office",
    icon: "📈",
    description: "Convert CSV files into Excel spreadsheets.",
    inputFormats: [".csv"],
    outputFormat: ".xlsx",
    maxFileSizeMB: 25,
    mimeTypes: ["text/csv"],
    seoTitle: "CSV to Excel Converter - Convert CSV to XLSX",
    seoDescription: "Convert CSV files to Excel format online. Fast CSV to XLSX converter with proper formatting.",
    faq: [
      { q: "What delimiter does the converter use?", a: "Comma-delimited CSV is standard. Other delimiters supported." },
      { q: "Are data types preserved?", a: "Yes, dates and numbers are properly formatted." },
      { q: "Can I edit after conversion?", a: "Yes, the Excel file is fully editable." },
      { q: "What about large CSV files?", a: "Files up to 25 MB are supported." }
    ],
    relatedTools: ["excel-to-csv", "excel-to-pdf", "pdf-to-excel"]
  },
  {
    id: "txt-to-docx",
    slug: "txt-to-docx",
    name: "TXT to DOCX",
    category: "Office",
    icon: "📝",
    description: "Convert plain text to formatted Word document.",
    inputFormats: [".txt"],
    outputFormat: ".docx",
    maxFileSizeMB: 10,
    mimeTypes: ["text/plain"],
    seoTitle: "TXT to DOCX Converter - Convert Text to Word",
    seoDescription: "Convert plain text files to Word documents online. Simple TXT to DOCX converter.",
    faq: [
      { q: "Can I format the document after?", a: "Yes, the DOCX file is fully editable in Word." },
      { q: "Are line breaks preserved?", a: "Yes, line breaks and spacing are maintained." },
      { q: "What font is used?", a: "Standard Word font (Calibri). Easy to change after opening." },
      { q: "Is there a size limit?", a: "Maximum 10 MB for text files." }
    ],
    relatedTools: ["docx-to-txt", "txt-to-pdf", "word-to-pdf"]
  },
  {
    id: "docx-to-txt",
    slug: "docx-to-txt",
    name: "DOCX to TXT",
    category: "Office",
    icon: "📄",
    description: "Extract text from Word documents to plain text.",
    inputFormats: [".docx"],
    outputFormat: ".txt",
    maxFileSizeMB: 50,
    mimeTypes: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    seoTitle: "DOCX to TXT Converter - Extract Text from Word",
    seoDescription: "Convert Word documents to plain text format. Free DOCX to TXT converter online.",
    faq: [
      { q: "Is formatting removed?", a: "Yes, output is plain text. Formatting is removed." },
      { q: "Are images included?", a: "No, only text is extracted." },
      { q: "What about tables?", a: "Tables are converted to text format with basic structure preserved." },
      { q: "Can I batch convert?", a: "One file at a time. Batch processing coming soon." }
    ],
    relatedTools: ["txt-to-docx", "pdf-to-txt", "docx-to-pdf"]
  },

  // Image Tools
  {
    id: "jpg-to-png",
    slug: "jpg-to-png",
    name: "JPG to PNG",
    category: "Image",
    icon: "🎨",
    description: "Convert JPG images to PNG format with transparency support.",
    inputFormats: [".jpg", ".jpeg"],
    outputFormat: ".png",
    maxFileSizeMB: 20,
    mimeTypes: ["image/jpeg"],
    seoTitle: "JPG to PNG Converter - Convert JPEG to PNG",
    seoDescription: "Convert JPG images to PNG format online. Free JPEG to PNG converter with lossless quality.",
    faq: [
      { q: "Why convert to PNG?", a: "PNG supports transparency and lossless compression, great for web graphics." },
      { q: "Will image quality be preserved?", a: "Yes, quality is lossless. PNG uses superior compression." },
      { q: "What about transparency?", a: "PNG supports transparency. JPEG backgrounds become transparent." },
      { q: "Can I convert batch files?", a: "One at a time currently. Bulk conversion coming soon." }
    ],
    relatedTools: ["png-to-jpg", "image-to-pdf", "pdf-to-jpg"]
  },
  {
    id: "png-to-jpg",
    slug: "png-to-jpg",
    name: "PNG to JPG",
    category: "Image",
    icon: "📷",
    description: "Convert PNG images to JPG format for smaller file sizes.",
    inputFormats: [".png"],
    outputFormat: ".jpg",
    maxFileSizeMB: 20,
    mimeTypes: ["image/png"],
    seoTitle: "PNG to JPG Converter - Convert PNG to JPEG",
    seoDescription: "Convert PNG images to JPG format online. Reduce file size with free PNG to JPEG converter.",
    faq: [
      { q: "Why convert PNG to JPG?", a: "JPG uses lossy compression, resulting in smaller file sizes." },
      { q: "Will I lose quality?", a: "Some quality loss occurs with lossy compression. Minimal with high settings." },
      { q: "What about transparency?", a: "JPG does not support transparency. Transparent areas become white." },
      { q: "Is the file size much smaller?", a: "Yes, JPG typically results in 50-80% smaller files than PNG." }
    ],
    relatedTools: ["jpg-to-png", "image-to-pdf", "pdf-to-jpg"]
  },
  {
    id: "svg-to-png",
    slug: "svg-to-png",
    name: "SVG to PNG",
    category: "Image",
    icon: "✨",
    description: "Convert scalable SVG graphics to PNG raster images.",
    inputFormats: [".svg"],
    outputFormat: ".png",
    maxFileSizeMB: 20,
    mimeTypes: ["image/svg+xml"],
    seoTitle: "SVG to PNG Converter - Convert SVG to PNG",
    seoDescription: "Convert SVG vector graphics to PNG format online. Free SVG to PNG converter.",
    faq: [
      { q: "What is SVG?", a: "SVG is scalable vector graphics format, resolution-independent." },
      { q: "Why convert to PNG?", a: "PNG is raster format, universal compatibility, useful for web and social media." },
      { q: "Will I lose quality?", a: "Vector quality is maintained when converting to PNG at high resolution." },
      { q: "What resolution is used?", a: "Standard web resolution (72 DPI). Custom resolutions available soon." }
    ],
    relatedTools: ["png-to-jpg", "jpg-to-png", "image-to-pdf"]
  }
];

/**
 * Get tools grouped by category
 */
export const getToolsByCategory = (category) => {
  return TOOLS.filter(tool => tool.category === category);
};

/**
 * Get tool by slug
 */
export const getToolBySlug = (slug) => {
  return TOOLS.find(tool => tool.slug === slug);
};

/**
 * Get tool by ID
 */
export const getToolById = (id) => {
  return TOOLS.find(tool => tool.id === id);
};

/**
 * Get all unique categories
 */
export const getCategories = () => {
  return [...new Set(TOOLS.map(tool => tool.category))];
};

/**
 * Get related tools
 */
export const getRelatedTools = (slug, limit = 3) => {
  const tool = getToolBySlug(slug);
  if (!tool || !tool.relatedTools) return [];
  return tool.relatedTools
    .map(id => getToolById(id))
    .filter(Boolean)
    .slice(0, limit);
};

export default TOOLS;
