/**
 * Footer Component
 */

import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
              <img src={logoUrl} alt="DocFlow Pro" className="h-5 w-5 object-contain" />
              DocFlow Pro
            </h3>
            <p className="text-sm">
              Convert your files quickly and securely. Free online tools to convert PDF, Word,
              Excel, images, and text files.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pdf-tools" className="hover:text-blue-400">
                  PDF Tools
                </Link>
              </li>
              <li>
                <Link to="/office-tools" className="hover:text-blue-400">
                  Office Tools
                </Link>
              </li>
              <li>
                <Link to="/image-tools" className="hover:text-blue-400">
                  Image Tools
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-blue-400">
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 support@docflowpro.com</li>
              <li>🔒 100% Secure & Private</li>
              <li>⚡ No Installation Required</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            © {currentYear} DocFlow Pro. All rights reserved. Files are automatically deleted after
            1 hour for privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
