import React from "react";
import Link from "next/link";

export default function InstallationGuide() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text p-8">
        {/* Header */}
      <header className="w-full border-b border-cyber-blue/20 bg-cyber-dark/80 backdrop-blur-sm z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-cyber-blue">{">"}</span>
            <span className="text-cyber-blue font-mono font-bold">Eigencode Docs</span>
          </div>
          <Link href="/" className="text-cyber-text hover:text-cyber-blue transition-colors">
            Home
          </Link>
        </div>
      </header>
      <div className="max-w-3xl mx-auto bg-cyber-dark/80 rounded-lg shadow-lg p-8 mt-8">
        <a href="/docs" className="text-cyber-blue hover:underline">Go Back</a>
        <h1 className="text-3xl font-bold text-cyber-blue mb-6 mt-4">{'>'} Getting Started with Eigencode</h1>
        <p className="mb-2">
          Welcome to Eigencode! This guide will help you get up and running with the Eigencode platform, allowing you to leverage AI-powered commands in your development workflow.
        </p>
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="bg-cyber-dark/80 border border-cyber-blue/20 rounded-lg p-6 flex-1 min-w-[260px] max-w-[320px] ">
            <h3 className="text-lg font-bold mb-2">Installation</h3>
            <p className="mb-2 text-sm">Set up Eigencode in your development environment with ease.</p>
            <Link href="/docs/getting-started/installation" className="text-cyber-blue hover:underline text-sm">Go to Installation</Link>
          </div>
          <div className="bg-cyber-dark/80 border border-cyber-blue/20 rounded-lg p-6 flex-1 min-w-[260px] max-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Quick Start</h3>
            <p className="mb-2 text-sm">Learn the basics and run your first Eigencode commands.</p>
            <Link href="/docs/getting-started/quick-start" className="text-cyber-blue hover:underline text-sm">Go to Quick Start</Link>
          </div>
          <div className="bg-cyber-dark/80 border border-cyber-blue/20 rounded-lg p-6 flex-1 min-w-[260px] max-w-[320px]">
            <h3 className="text-lg font-bold mb-2">Open</h3>
            <p className="mb-2 text-sm">Initialize Eigencode in your development environment.</p>
            <Link href="/docs/getting-started/open" className="text-cyber-blue hover:underline text-sm">Go to Open</Link>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-cyber-blue mb-2 text-base font-semibold">Next Steps</h4>
          <p className="mb-2">Once you're comfortable with the basics, explore these resources to get the most out of Eigencode:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <Link href="/cmds" className="text-cyber-blue hover:underline">Command Registry</Link> - Browse the complete set of available commands
            </li>
            <li>
              <Link href="#" className="text-cyber-blue hover:underline">Tutorials</Link> - Step-by-step guides for common workflows
            </li>
            <li>
              <Link href="/docs/white-paper" className="text-cyber-blue hover:underline">White Paper</Link> - Understand the principles behind Eigencode
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
