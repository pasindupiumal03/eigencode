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
        <h1 className="text-3xl font-bold text-cyber-blue mb-6 mt-4">{'>'} Quick Start</h1>
        <div className="bg-cyber-dark/70 rounded-md p-6 border border-cyber-blue/20">
          <pre className="mb-4 text-cyber-text"><strong>API Key Configuration</strong></pre>
          <p className="mb-4">Eigencode integrates with multiple AI model providers. To begin using Eigencode, you will need to obtain an API key from one of the supported providers. As of now we support models for Anthropic, Deepseek and OpenAI.</p>
          <pre className="mb-4 text-cyber-text"><strong>Setting Up the API Key</strong></pre>
          <p className="mb-2">After obtaining your API key from one of the providers, you need to configure it with Eigencode. Run the following command to set up your API key:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">eigencode setup</code></pre>
          <p className="mb-4">There you can choose your provider, model and then place the API key, which will be saved safely on your local device. For the security purposes it is recommended to include `~/.eigencode` in your '.gitignore' file to avoid exposing your API keys.</p>
          <p className="mb-4">If you wish to switch to a different provider or change the model you’re using, simply rerun the eigencode setup command. If you’ve already stored an API key, you won’t be required to re-enter it when changing models.</p>
          <p className="mb-2">If you need more information on how to use Eigencode, you can run the following command to view available options and commands:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">eigencode help</code></pre>
          <p className="mb-4">This will display a list of available commands, including advanced configuration options and troubleshooting tips.</p>
        </div>
      </div>
    </div>
  );
}
