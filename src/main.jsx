/**
 * main.jsx - Entry point for React app
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import logoUrl from "../logo.svg";

const faviconLink = document.querySelector('link[rel="icon"]') || document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/svg+xml";
faviconLink.href = logoUrl;
if (!faviconLink.parentNode) {
  document.head.appendChild(faviconLink);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
