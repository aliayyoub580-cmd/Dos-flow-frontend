/**
 * Privacy Policy Page
 */

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
            <p>
              DocFlow Pro ("we", "us", or "our") operates the DocFlow Pro website. This page
              informs you of our policies regarding the collection, use, and disclosure of
              personal data when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. File Usage</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Your uploaded files are used exclusively for conversion purposes.</li>
              <li>Files are not shared with any third parties.</li>
              <li>Files are automatically deleted after 1 hour for guest users.</li>
              <li>We do not store or analyze your file content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Collection</h2>
            <p>We may collect:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>IP addresses for rate limiting and security</li>
              <li>Browser type and basic usage analytics</li>
              <li>Conversion metadata (file types, sizes, success/failure status)</li>
            </ul>
            <p className="mt-4">We do NOT collect or store personal information like names or emails unless you voluntarily provide it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Files are transmitted securely over HTTPS</li>
              <li>Uploaded files are stored outside public directories</li>
              <li>Files are encrypted during storage</li>
              <li>We implement rate limiting to prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p>
              DocFlow Pro may use cookies only for essential functionality such as session
              management. We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@docflowpro.com
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
