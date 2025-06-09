export default function DocTry() {
  return (
    <div
      className="prose prose-invert prose-blue max-w-none"
      style={{ opacity: 1, transform: "none" }}
    >
      <div
        className="prose prose-invert max-w-none text-blue-400"
        style={{ opacity: 1 }}
      >
        <h1>Getting Started with Eigencode</h1>
        <p className="lead text-xl text-white">
          Welcome to Eigencode! This guide will help you get up and running with
          the Eigencode platform, allowing you to leverage AI-powered commands
          in your development workflow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
          <a className="block group" href="/docs/getting-started/installation">
            <div className="bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-6 h-full transition-colors">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                Installation
              </h3>
              <p className="text-sm text-zinc-400">
                Set up Eigencode in your development environment with ease.
              </p>
            </div>
          </a>
          <a className="block group" href="/docs/getting-started/quick-start">
            <div className="bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-6 h-full transition-colors">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                Quick Start
              </h3>
              <p className="text-sm text-zinc-400">
                Learn the basics and run your first Eigencode commands.
              </p>
            </div>
          </a>
          <a className="block group" href="/docs/getting-started/open">
            <div className="bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 rounded-lg p-6 h-full transition-colors">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                Open
              </h3>
              <p className="text-sm text-zinc-400">
                Initialize Eigencode in your development environment.
              </p>
            </div>
          </a>
        </div>
        <h2>Next Steps</h2>
        <p className="text-white">
          Once you're comfortable with the basics, explore these resources to
          get the most out of Eigencode:
        </p>
        <ul>
          <li>
            <a
              className="text-blue-400 hover:text-blue-300"
              href="/command-registry"
            >
              Command Registry
            </a>{" "}
            - Browse the complete set of available commands
          </li>
          <li>
            <a
              className="text-blue-400 hover:text-blue-300"
              href="/docs/tutorials"
            >
              Tutorials
            </a>{" "}
            - Step-by-step guides for common workflows
          </li>
          <li>
            <a
              className="text-blue-400 hover:text-blue-300"
              href="/docs/white-paper"
            >
              White Paper
            </a>{" "}
            - Understand the principles behind Eigencode
          </li>
        </ul>
      </div>
    </div>
  );
}
