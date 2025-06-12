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
        <h1 className="text-3xl font-bold text-cyber-blue mb-6 mt-4">{'>'} Open Command</h1>
        <div className="bg-cyber-dark/70 rounded-md p-6 border border-cyber-blue/20">
          <pre className="mb-4 text-cyber-text"><strong>Open Command</strong></pre>
          <p className="mb-4">The core command in Eigencode is `eigencode open [path]`, which launches the Eigencode interface in your working directory. It reads the necessary context and prepares to take your requests.</p>
          <pre className="mb-4 text-cyber-text"><strong>Command Syntax</strong></pre>
          <p className="mb-2">To use this command, run the following in your terminal:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4"><code className="text-cyber-green">eigencode open [path]</code></pre>
          <p className="mb-4">Where `[path]` refers to the directory or project you wish to work with. After executing the command, you will be presented with a text field where you can prompt the AI to perform various tasks, such as: Analyzing files, Conducting security assessments ,Providing suggestions ,Writing code , Updating/Installing dependencies , Making Git actions , And more</p>
          <pre className="mb-4 text-cyber-text"><strong>Example Workflow</strong></pre>
          <p className="mb-4">Once the command is executed, the system will enter "Project Mode" and prompt you for actions. Here’s an example interaction:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4">
          <code className="text-cyber-green">■ SYS: Working in Project Mode</code><br></br>
          <code className="text-cyber-green">■ AI: How can I help you with your project?</code><br></br>
          <code className="text-cyber-green">> what does main.rs in src do?</code><br></br>
          </pre>
          <p className="mb-2">The AI will dynamically analyze the context of your project, ensuring that the information is relevant and up-to-date. Here are more example requests you could ask Eigencode:</p>
          <pre className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 overflow-x-auto mb-4">
          <code className="text-cyber-green">> Generate CLI app boilerplate in main.rs</code><br></br>
          <code className="text-cyber-green"># Eigencode doesn't need explicit file paths, it can figure them out on its own</code><br></br>
          <code className="text-cyber-green">> install the necessary dependencies for physics engine</code><br></br>
          <code className="text-cyber-green"># It can install, update or remove dependencies on your request</code><br></br>
          <code className="text-cyber-green">> Use git CLI to merge the branches</code><br></br>
          <code className="text-cyber-green"># And more...</code><br></br>
          </pre>
          <pre className="mb-4 text-cyber-text"><strong>Ignore File</strong></pre>
          <p className="mb-4">You can create `.eigenignore` file in your project directory with `.gitignore` syntax to exclude files and folders from the Eigencode context.</p>
          <pre className="mb-4 text-cyber-text"><strong>Context Management</strong></pre>
          <p className="mb-4">Eigencode intelligently manages context dynamically to avoid overload. The system’s memory ensures that it only retains the necessary context, so you won’t encounter information overload. This efficient memory system helps improve the accuracy and relevance of AI responses.</p>
        </div>
      </div>
    </div>
  );
}
