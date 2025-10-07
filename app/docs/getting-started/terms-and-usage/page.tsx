"use client"

import Link from "next/link"
import { useState } from "react"
import { FileText, Shield, Zap } from "lucide-react"
import { TerminalWindow } from "@/components/terminal-window"

export default function TermsOfUsePage() {
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
                  href="/docs/terms-and-usage"
                  className="block text-cyber-blue transition-colors text-sm py-1 underline underline-offset-4"
                >
                  Terms &amp; Usage
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
              <span>{">"} Terms of Use</span>
            </h1>
            <p className="text-cyber-muted text-sm">Effective: {effectiveDate}</p>
          </section>

          {/* Body */}
          <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm space-y-8">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">1. Introduction</h2>
              <p className="text-cyber-text">
                These Terms of Use (“Terms”) govern your access to and use of Polybiuos, including the
                command-line interface, websites, documentation, dashboards, and any related software,
                services, or content (collectively, the “Services”). By using the Services, you agree to
                these Terms. If you do not agree, do not use the Services.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">2. Eligibility & Accounts</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>You must be legally able to enter into a binding agreement in your jurisdiction.</li>
                <li>You are responsible for safeguarding any credentials, keys, or tokens used with the Services.</li>
                <li>You must promptly notify us of any unauthorized access or security incident.</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">3. Acceptable Use</h2>
              <p className="text-cyber-text mb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>Reverse engineer, decompile, or circumvent safeguards in the Services.</li>
                <li>Upload or transmit malware, exploits, or harmful code.</li>
                <li>Infringe, misappropriate, or violate any third-party rights or applicable laws.</li>
                <li>Use the Services to create models or datasets that replicate confidential source code or secrets.</li>
                <li>Abuse rate limits, scrape without permission, or interfere with system integrity.</li>
              </ul>
            </section>

            {/* AI & Outputs */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">4. AI-Generated Content & Limitations</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>
                  Outputs may be incorrect, insecure, or incomplete. You must review, test, and validate before use
                  in production or critical workflows.
                </li>
                <li>
                  You are responsible for compliance, including license compatibility, data protection, and secure
                  handling of secrets/keys referenced in prompts or context.
                </li>
                <li>
                  The Services may integrate third-party models and APIs; their terms and quotas also apply.
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">5. Intellectual Property</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>We and our licensors retain all rights to the Services, branding, and associated content.</li>
                <li>
                  Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to
                  use the Services. No other rights are granted by implication or otherwise.
                </li>
                <li>
                  If the Services surface open-source components, those are licensed under their respective licenses,
                  which govern your use of those components.
                </li>
              </ul>
            </section>

            {/* Third-Party & Open Source */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">6. Third-Party Services & Open Source</h2>
              <p className="text-cyber-text">
                The Services may rely on third-party APIs, model providers, registries, chains, or package managers.
                Your use of those services is subject to their terms and policies. We are not responsible for outages,
                changes, or security issues originating from third parties.
              </p>
            </section>

            {/* Payments / Tokens (optional for future) */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">7. Pricing, Access & Experimental Features</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>
                  Certain features may be paid, rate-limited, or gated (e.g., API usage, premium modules, token-gated
                  panels). We may change pricing, quotas, or access tiers at any time with reasonable notice.
                </li>
                <li>
                  Experimental features may be unstable and are provided “as is” for testing only.
                </li>
              </ul>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">8. Privacy & Data</h2>
              <ul className="list-disc list-inside text-cyber-text space-y-1">
                <li>
                  You are responsible for not sharing secrets, personal data, or regulated information in prompts unless
                  you have lawful grounds to do so.
                </li>
                <li>
                  We may process usage metadata to improve reliability, safety, and performance. See our Privacy
                  Notice (if provided) for details.
                </li>
              </ul>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">9. Disclaimers</h2>
              <p className="text-cyber-text">
                THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
                IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR AVAILABILITY. YOU ASSUME ALL RISK FOR YOUR USE.
              </p>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">10. Limitation of Liability</h2>
              <p className="text-cyber-text">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS
                INTERRUPTION. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICES SHALL NOT EXCEED THE AMOUNTS
                PAID BY YOU TO US FOR THE SERVICES IN THE 3 MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </section>

            {/* Indemnity */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">11. Indemnification</h2>
              <p className="text-cyber-text">
                You agree to defend, indemnify, and hold harmless us and our affiliates from any claims, damages,
                liabilities, and expenses (including reasonable attorneys’ fees) arising from your use of the Services
                or violation of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">12. Suspension & Termination</h2>
              <p className="text-cyber-text">
                We may suspend or terminate your access to the Services at any time for any reason, including suspected
                violations of these Terms, security risks, or unlawful activity. Upon termination, your right to use the
                Services ceases immediately.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">13. Changes to the Terms</h2>
              <p className="text-cyber-text">
                We may update these Terms from time to time. Material changes will be indicated by updating the
                effective date or posting a notice. Your continued use after changes constitutes acceptance.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-bold text-cyber-blue mb-2">14. Governing Law</h2>
              <p className="text-cyber-text">
                These Terms will be governed by applicable laws of the jurisdiction in which the project is operated,
                without regard to conflict-of-law principles. Venue and jurisdiction shall lie in the competent courts
                of that location, unless otherwise required by law.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-cyber-blue/20 pt-6">
              <h2 className="text-xl font-bold text-cyber-blue mb-2">15. Contact</h2>
              <p className="text-cyber-text">
                Questions or notices regarding these Terms can be sent to{" "}
                <a href="mailto:hello@polybious.io" className="text-cyber-blue hover:text-cyber-green">
                  hello@polybious.io
                </a>.
              </p>
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
