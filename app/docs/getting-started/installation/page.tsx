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
        <h1 className="text-3xl font-bold text-cyber-blue mb-6 mt-4">{'>'} Installation Guide</h1>
        <div className="bg-cyber-dark/70 rounded-md p-6 border border-cyber-blue/20">
          <pre className="mb-4 text-cyber-text"><strong>Getting Started</strong></pre>
          <pre className="mb-4 text-cyber-text">Installation</pre>
          <pre className="mb-4 text-cyber-text">UNIX-like Systems (Linux/macOS)</pre>
          <p className="mb-2">To install Eigencode on a UNIX-like system (Linux or macOS), open your terminal and run the following command:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">curl -fsSL https://www.eigencode.dev/stable/latest/installer.sh | sudo bash</code></pre>
          <p className="mb-4">This script will download and install the necessary Eigencode binary files.</p>
          <pre className="mb-4 text-cyber-text">Windows Systems</pre>
          <p className="mb-2">For Windows users, the installation process requires running a PowerShell command. Open PowerShell and execute the following:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">powershell -ExecutionPolicy Bypass -Command "iex ((New-Object Net.WebClient).DownloadString('https://www.eigencode.dev/stable/latest/installer.ps1'))"</code></pre>
          <p className="mb-4">Once the command completes, Eigencode will be installed on your system.</p>
          <pre className="mb-4 text-cyber-text">Verifying Installation</pre>
          <p className="mb-2">To confirm the installation was successful, run the following command in your terminal or PowerShell session:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">eigencode version</code></pre>
          <p>If everything is set up correctly, the version number of Eigencode will be displayed. You might need to restart your terminal or PowerShell session before running this command.</p>
        </div>
      </div>
    </div>
  );
}

"bg-cyber-terminal border border-cyber-green/30 rounded p-4 mb-4"
