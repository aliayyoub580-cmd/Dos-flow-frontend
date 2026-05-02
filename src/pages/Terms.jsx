/**
 * Terms of Service Page
 */

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using DocFlow Pro, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or
              software) on DocFlow Pro for personal, non-commercial transitory viewing only. This is
              the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p>
              The materials on DocFlow Pro are provided on an 'as is' basis. DocFlow Pro makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
            <p>
              In no event shall DocFlow Pro or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on DocFlow Pro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on DocFlow Pro could include technical, typographical, or
              photographic errors. DocFlow Pro does not warrant that any of the materials on DocFlow Pro
              are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Materials and Content</h2>
            <p>
              DocFlow Pro has not reviewed all of the sites linked to its website and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply
              endorsement by DocFlow Pro of the site. Use of any such linked website is at the user's own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
            <p>
              DocFlow Pro may revise these terms of service for our website at any time without notice.
              By using this website, you are agreeing to be bound by the then current version of these
              terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts
              in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Rate Limiting</h2>
            <p>
              DocFlow Pro implements rate limiting to ensure fair usage:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Guest users: 10 conversions per hour</li>
              <li>Registered free users: 30 conversions per hour</li>
              <li>Premium users: 200 conversions per hour</li>
            </ul>
            <p className="mt-4">Exceeding these limits may result in temporary service suspension.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. File Restrictions</h2>
            <p>
              Users agree not to upload files containing:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Malware or executable code</li>
              <li>Illegal content</li>
              <li>Copyright-infringing material</li>
              <li>Sexually explicit content</li>
              <li>Threatening or abusive material</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              Email: support@docflowpro.com
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
