/**
 * App.jsx - Main application component
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import CategoryPage from "./pages/CategoryPage";
import ToolPage from "./pages/ToolPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pdf-tools" element={<CategoryPage category="pdf-tools" />} />
            <Route path="/office-tools" element={<CategoryPage category="office-tools" />} />
            <Route path="/image-tools" element={<CategoryPage category="image-tools" />} />
            <Route path="/tools/:toolSlug" element={<ToolPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
