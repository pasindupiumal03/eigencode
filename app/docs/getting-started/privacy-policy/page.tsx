"use client"

import Link from "next/link"
import { useState } from "react"
import { FileText, Shield, Zap } from "lucide-react"
import { TerminalWindow } from "@/components/terminal-window"

export default function PrivacyPolicyPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const effectiveDate = "September 30, 2025"

  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="scanline" />

      {/* Header */}
      <header className="w-full border-b border-cyber-blue/20 bg-cyber-dark/80 backdrop-blur-sm z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-cyber-blue">{">"}</span>
            <span className="text-cyber-blue font-mono font-bold">Polybiuos Docs</span>
          </div>
          <button
            className="lg:hidden text-cyber-text hover:text-cyber-blue transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>
          <Link
            href="/"
            className="hidden lg:block text-cyber-text hover:text-cyber-blue transition-colors"
          >
            Home
          </Link>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-full lg:w-80 min-h-screen border-r border-cyber-blue/20 bg-cyber-dark/50 backdrop-blur-sm p-6 z-10 relative">
            {/* Terminal Window in Sidebar */}
            <TerminalWindow title="polybiuos" className="mb-8">
              <div className="text-xs">
                <div className="text-cyber-green mb-2">$ polybiuos</div>
                <div className="text-cyber-text mb-1">CLI v0.9.x</div>
                <div className="text-cyber-text mb-1">Intelligent code generation</div>
                <div className="text-cyber-text mb-3">and analysis</div>
                <div className="text-cyber-green mb-2">$ polybiuos help</div>
                <div className="text-cyber-blue">See docs →</div>
              </div>
            </TerminalWindow>

            {/* Documentation Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-cyber-blue" />
                <h3 className="text-cyber-blue font-bold">Documentation</h3>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/docs/getting-started"
                  className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  Getting Started
                </Link>
                <Link
                  href="/docs/getting-started/terms-and-usage"
                  className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  Terms &amp; Usage
                </Link>
                <Link
                  href="/docs/getting-started/privacy-policy"
                  className="block text-cyber-blue transition-colors text-sm py-1 underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/docs/getting-started/installation"
                  className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  Installation Guide
                </Link>
                <Link
                  href="/docs/getting-started/quick-start"
                  className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  Quick Start
                </Link>
                <Link
                  href="/docs/getting-started/open"
                  className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  Open
                </Link>
              </nav>
            </div>

            {/* Quick Links Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-cyber-magenta" />
                <h3 className="text-cyber-magenta font-bold">Quick Links</h3>
              </div>
              <nav className="space-y-2">
                <Link
                  href="/cmds"
                  className="flex items-center gap-2 text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  <span className="text-cyber-magenta">⚡</span>
                  Command Registry
                </Link>
                <Link
                  href="/aura"
                  className="flex items-center gap-2 text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
                >
                  <span className="text-cyber-blue">🔮</span>
                  Aura Components
                </Link>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-8 z-10 relative">
          {/* Title */}
          <section className="mb-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-cyber-blue flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyber-blue" />
              <span>{">"} Privacy Policy</span>
            </h1>
            <p className="text-cyber-muted text-sm">Effective: {effectiveDate}</p>
          </section>

          {/* Body */}
          <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm space-y-8">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">1. Introduction</h2>
              <p className="text-cyber-text">
                This Privacy Policy explains how Polybiuos ("we," "us," or "our") collects, uses, and protects 
                your information when you use our command-line interface, websites, documentation, dashboards, 
                and related services (collectively, the "Services"). We are committed to protecting your privacy 
                and handling your data responsibly.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyber-blue mb-2">2.1 Information You Provide</h3>
                  <ul className="list-disc list-inside text-cyber-text space-y-1">
                    <li>Account information (email, username, authentication credentials)</li>
                    <li>Code snippets, prompts, and project context you submit to our Services</li>
                    <li>Feedback, support requests, and communications with us</li>
                    <li>Configuration settings and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyber-blue mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-cyber-text space-y-1">
                    <li>Usage analytics (commands used, features accessed, session duration)</li>
                    <li>Device and system information (OS, CLI version, IP address)</li>
                    <li>Performance metrics and error logs</li>
                    <li>API usage patterns and rate limiting data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">3. How We Use Your Information</h2>
              <p className="text-cyber-text mb-2">We use the collected information to:</p>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process AI-generated code and content requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent abuse, fraud, or security threats</li>
                <li>Respond to support requests and communications</li>
                <li>Comply with legal obligations and enforce our Terms of Use</li>
                <li>Send important service updates and security notifications</li>
              </ul>
            </section>

            {/* Data Processing & AI */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">4. AI Processing & Third-Party Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cyber-blue mb-2">4.1 AI Model Processing</h3>
                  <ul className="list-disc list-inside text-cyber-text space-y-1">
                    <li>Code and prompts may be processed by third-party AI providers (OpenAI, Anthropic, etc.)</li>
                    <li>We implement safeguards to protect sensitive data during processing</li>
                    <li>Outputs are generated based on your inputs and may be logged for quality improvement</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyber-blue mb-2">4.2 Data Retention</h3>
                  <ul className="list-disc list-inside text-cyber-text space-y-1">
                    <li>We retain usage data for service improvement and security purposes</li>
                    <li>Personal information is retained only as long as necessary for stated purposes</li>
                    <li>You may request deletion of your data subject to legal and operational requirements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">5. Information Sharing & Disclosure</h2>
              <p className="text-cyber-text mb-2">We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li><strong>Service Providers:</strong> Third-party services that help us operate and improve our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Security & Safety:</strong> To protect against fraud, abuse, or threats to user safety</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset transfers</li>
                <li><strong>Consent:</strong> When you explicitly agree to sharing for specific purposes</li>
              </ul>
              <p className="text-cyber-text mt-4">
                <strong>We do not sell your personal information to third parties.</strong>
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">6. Data Security</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>We implement industry-standard security measures to protect your data</li>
                <li>All data transmission is encrypted using secure protocols (HTTPS/TLS)</li>
                <li>Access to personal information is restricted to authorized personnel only</li>
                <li>We regularly review and update our security practices</li>
                <li>However, no method of transmission or storage is 100% secure</li>
              </ul>
            </section>

            {/* Your Rights & Choices */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">7. Your Rights & Choices</h2>
              <p className="text-cyber-text mb-2">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Decline certain data processing activities</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="text-cyber-text mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@polybious.io" className="text-cyber-blue hover:text-cyber-green">
                  privacy@polybious.io
                </a>.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">8. Cookies & Tracking Technologies</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>We use cookies and similar technologies to enhance user experience</li>
                <li>Essential cookies are required for basic functionality</li>
                <li>Analytics cookies help us understand usage patterns</li>
                <li>You can control cookie preferences through your browser settings</li>
                <li>Disabling certain cookies may affect service functionality</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">9. International Data Transfers</h2>
              <p className="text-cyber-text">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during international 
                transfers, including standard contractual clauses and adequacy decisions where applicable.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">10. Children's Privacy</h2>
              <p className="text-cyber-text">
                Our Services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">11. Changes to This Privacy Policy</h2>
              <p className="text-cyber-text">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of material changes by updating the effective date 
                and, where required, providing additional notice through our Services or email.
              </p>
            </section>

            {/* Contact Information */}
            <section className="border-t border-cyber-blue/20 pt-6">
              <h2 className="text-xl font-bold text-cyber-blue mb-2">12. Contact Us</h2>
              <p className="text-cyber-text mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-blue/30">
                <ul className="text-cyber-text space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:hello@polybious.io" className="text-cyber-blue hover:text-cyber-green">
                      hello@polybious.io
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-6">
            <Link href="/docs" className="text-cyber-blue hover:text-cyber-green transition-colors">
              ← Back to Docs
            </Link>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10 relative">
        <p className="mb-2">Polybiuos Documentation</p>
        <p>© {new Date().getFullYear()} Polybiuos. All rights reserved.</p>
      </footer>
    </div>
  )
}
