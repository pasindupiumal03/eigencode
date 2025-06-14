"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MatrixBackground } from "@/components/matrix-background";
import { GlitchText } from "@/components/glitch-text";
import { TypingEffect } from "@/components/typing-effect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FaCodeBranch } from "react-icons/fa6";
import { FaArrowsLeftRight } from "react-icons/fa6";
import CommandDetailsModal from "@/components/CommandDetailsModal";

export default function CmdsPage() {
  const [activeTab, setActiveTab] = useState("avail");
  const [selectedCommand, setSelectedCommand] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredCommands, setFilteredCommands] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("noFilter");
  const [sortType, setSortType] = useState<
    "az" | "none" | "status" | "popularity" | "recent"
  >("status");
  const [sortAscending, setSortAscending] = useState(true);
  const [commands, setCommands] = useState([
    {
      name: "open",
      id: 1,
      status: "complete",
      description: "Open the Eigencode in your working directory or a file",
      detailedDescription:
        "Launch Eigencode interface in your current working directory or open a specific file for AI-assisted coding. This command starts the interactive session.",
      tags: ["programming", "efficiency", "full-pack"],
      category: "analysis",
      usage: "$ eigencode open",
      examples: [
        "# Open Eigencode in the current directory\n$ eigencode open .",
      ],
    },
    {
      name: "setup",
      id: 2,
      status: "complete",
      description: "Setup the AI configuration you want Eigencode to use",
      detailedDescription:
        "Configure Eigencode with your preferred AI provider and settings. This command initializes the configuration file and sets up authentication for AI services.",
      tags: ["configuration"],
      category: "utility",
      usage: "$ eigencode setup",
      examples: ["# Start the setup process\n$ eigencode setup"],
    },
    {
      name: "explain",
      id: 3,
      status: "complete",
      description: "Get AI-powered explanation of code",
      detailedDescription:
        "Generate detailed explanations of code functionality, algorithms, and design patterns. Perfect for understanding complex codebases or learning new concepts.",
      tags: [],
      category: "documentation",
      usage: "$ eigencode explain [file-path]",
      examples: [
        "# Get a detailed explanation of a complex function\n$ eigencode explain explain src/algorithm.rs:optimize_path --depth=detailed",
      ],
    },
    {
      name: "chat",
      id: 4,
      status: "complete",
      description: "Use Eigencode without supplying additional context",
      detailedDescription:
        "Start an interactive chat session with AI for general programming questions, code reviews, and development guidance without needing to specify files or context.",
      tags: [],
      category: "analysis",
      usage: "$ eigencode chat",
      examples: [
        "# Start interactive chat\n$ eigencode chat",
        '# Chat with specific topic\n$ eigencode chat --topic "React hooks"',
        '# Chat with code snippet\n$ eigencode chat --code "const [state, setState] = useState()"',
      ],
    },
    {
      name: "dependency_graph",
      id: 5,
      status: "in progress",
      description: "Generate and visualize module dependencies",
      detailedDescription:
        "Create visual dependency graphs of your project modules and packages. Helps identify circular dependencies, unused modules, and optimization opportunities.",
      tags: [],
      category: "analysis",
      usage: "$ eigencode dependency_graph",
      examples: ["# Generate dependency graph\n$ eigencode dependency_graph ."],
    },
    {
      name: "init",
      id: 6,
      status: "planned",
      description: "Initialize new projects using Eigencode",
      detailedDescription:
        "Create new projects with AI-generated boilerplate code and structure. This command will set up project templates based on your requirements.",
      tags: ["injection possibility"],
      category: "refactoring",
      usage: "$ eigencode init [project-name]",
      examples: [
        "# Initialize a new project\n$ eigencode init my-app",
        "# Initialize with specific template\n$ eigencode init my-app --template react",
        "# Initialize with AI-generated structure\n$ eigencode init my-app --ai-generate",
      ],
    },
    {
      name: "fix",
      id: 7,
      status: "planned",
      description: "Analyze error and codebase to make fixes",
      detailedDescription:
        "Automatically detect and fix errors in your codebase using AI analysis. This command scans for bugs, performance issues, and code quality problems.",
      tags: [],
      category: "optimization",
      usage: "$ eigencode fix [file-path]",
      examples: [
        "# Fix errors in current directory\n$ eigencode fix",
        "# Fix specific file\n$ eigencode fix src/component.js",
        "# Fix with specific error type\n$ eigencode fix --type syntax",
      ],
    },
  ]);
  const [submitFeatureModalVisible, setSubmitFeatureModalVisible] =
    useState(false);
  const [currentModalId, setCurrentModalId] = useState(1);

  useEffect(() => {
    if (!submitFeatureModalVisible) {
      resetSubmitCommandModal();
    }
  }, [submitFeatureModalVisible])

  const handleNext = () => {
    if (currentModalId !== 4) {
      setCurrentModalId(currentModalId + 1);
    }
  };

  const handlePrev = () => {
    if (currentModalId !== 1) {
      setCurrentModalId(currentModalId - 1);
    }
  };

  const [newCommand, setNewCommand] = useState({
    commandName: "",
    shortDescription: "",
    detailedDescription: "",
    category: "",
    githubRepositoryLink: "",
    usageExample: "",
    parameters: [
      {
        name: "",
        type: "",
        description: "",
        required: false
      },
    ],
    usageExamples: [
      {
        description: "",
        commandCode: "",
      },
    ],
    rustImplementationCode: "",
  });

  const handleSubmitCommand = () => {
    const formattedNewCommand = {
      name: newCommand.commandName,
      id: commands.length + 1,
      status: "planned",
      description: newCommand.shortDescription,
      detailedDescription: newCommand.detailedDescription,
      tags: [],
      category: newCommand.category,
      usage: newCommand.usageExample,
      examples: newCommand.usageExamples.map((e) => e.description),
    };
    setCommands((prev) => [...prev, formattedNewCommand]);
    resetSubmitCommandModal();
  }

  const resetSubmitCommandModal = () => {
    setCurrentModalId(1);
    setNewCommand({
      commandName: "",
      shortDescription: "",
      detailedDescription: "",
      category: "",
      githubRepositoryLink: "",
      usageExample: "",
      parameters: [
        {
          name: "",
          type: "",
          description: "",
          required: false,
        },
      ],
      usageExamples: [
        {
          description: "",
          commandCode: "",
        },
      ],
      rustImplementationCode: "",
    });
    setSubmitFeatureModalVisible(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-cyber-green";
      case "planned":
        return "text-cyber-blue";
      case "in progress":
        return "text-cyber-yellow";
      default:
        return "text-cyber-text";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-cyber-green/20 border-cyber-green/30";
      case "planned":
        return "bg-cyber-blue/20 border-cyber-blue/30";
      case "in progress":
        return "bg-cyber-yellow/20 border-cyber-yellow/30";
      default:
        return "bg-cyber-text/20 border-cyber-text/30";
    }
  };

  const handleCommandClick = (command: any) => {
    setSelectedCommand(command);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommand(null);
  };

  const filterByCategory = (passedCategory: string) => {
    setActiveFilter(passedCategory);
    const filtered = commands.filter(
      (command) => command.category === passedCategory
    );
    setFilteredCommands(sortCommands(filtered));
  };

  const resetCommandFilters = () => {
    setActiveFilter("noFilter");
    setFilteredCommands([]);
  };

  const sortCommands = (commandsToSort: any[]) => {
    if (sortType === "az") {
      const result =
        sortAscending === true
          ? [...commandsToSort].sort((a, b) => a.name.localeCompare(b.name))
          : [...commandsToSort].sort((a, b) => b.name.localeCompare(a.name));
      return result;
    } else if (sortType === "status") {
      const completed = [];
      const planned = [];
      const inProgress = [];
      for (let i = 0; i < commandsToSort.length; i++) {
        if (commandsToSort[i].status === "complete") {
          completed.push(commandsToSort[i]);
        } else if (commandsToSort[i].status === "planned") {
          planned.push(commandsToSort[i]);
        } else if (commandsToSort[i].status === "in progress") {
          inProgress.push(commandsToSort[i]);
        } else {
          continue;
        }
      }
      const result = sortAscending
        ? [...completed, ...inProgress, ...planned]
        : [...planned, ...inProgress, ...completed];
      return result;
    } else if (sortType === "recent") {
      const result = sortAscending
        ? [...commandsToSort].sort((a, b) => b.id - a.id)
        : [...commandsToSort].sort((a, b) => a.id - b.id);
      return result;
    } else if (sortType === "popularity") {
      const result = sortAscending
        ? [...commandsToSort].sort((a, b) => a.id - b.id)
        : [...commandsToSort].sort((a, b) => b.id - a.id);
      return result;
    }
    return commandsToSort;
  };

  const handleSort = (
    type: "none" | "az" | "status" | "popularity" | "recent"
  ) => {
    setSortType(type);
    const commandsToSort =
      filteredCommands.length === 0 ? commands : filteredCommands;
    setFilteredCommands(sortCommands(commandsToSort));
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <MatrixBackground />

        {submitFeatureModalVisible && currentModalId === 1 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div
              className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{ transform: "none" }}
            >
              <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Submit a Command
                </h2>
                <button
                  className="text-zinc-500 hover:text-zinc-300"
                  onClick={resetSubmitCommandModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex mb-8 justify-between">
                  {["Basics", "Details", "Examples", "Review"].map(
                    (label, index) => {
                      const step = index + 1;
                      const isActive = step === 1;
                      return (
                        <div key={label} className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                              isActive
                                ? "bg-blue-600 text-white"
                                : "bg-zinc-800 text-zinc-500"
                            }`}
                            style={{
                              transform: isActive ? "scale(1.1)" : "none",
                              backgroundColor: isActive
                                ? "rgb(37, 99, 235)"
                                : "rgb(39, 39, 42)",
                            }}
                          >
                            {step}
                          </div>
                          <div className="text-xs mt-1 text-zinc-500">
                            {label}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Command Name
                    </label>
                    <input
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
                      placeholder="e.g., analyze_perf"
                      type="text"
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          commandName: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Short Description
                    </label>
                    <input
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
                      placeholder="Brief description of command functionality"
                      type="text"
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          shortDescription: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Detailed Description
                    </label>
                    <textarea
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded h-24"
                      placeholder="Detailed explanation of what the command does and how it works"
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          detailedDescription: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-2">Category</label>
                    <select
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
                      value={newCommand.category}
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    >
                      <option value="NA">Select Category</option>
                      <option value="analysis">Analysis</option>
                      <option value="optimization">Optimization</option>
                      <option value="refactoring">Refactoring</option>
                      <option value="documentation">Documentation</option>
                      <option value="utility">Utility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-2">
                      GitHub Repository Link{" "}
                      <span className="text-zinc-500 text-xs">(Optional)</span>
                    </label>
                    <input
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
                      placeholder="https://github.com/yourusername/your-command-repo"
                      type="url"
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          githubRepositoryLink: e.target.value,
                        }))
                      }
                    />
                    <p className="text-zinc-500 text-xs mt-1">
                      If you've already implemented your command, provide a link
                      to the GitHub repository
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="px-4 py-2 bg-zinc-800 text-zinc-400 rounded"
                    onClick={resetSubmitCommandModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitFeatureModalVisible && currentModalId === 2 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div
              className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{ transform: "none" }}
            >
              <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Submit a Command
                </h2>
                <button
                  className="text-zinc-500 hover:text-zinc-300"
                  onClick={() => {
                    setSubmitFeatureModalVisible(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                {/* Stepper */}
                <div className="flex mb-8 justify-between">
                  {/* Step 1 - Completed */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Basics</div>
                  </div>

                  {/* Step 2 - Active */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-blue-600 text-white"
                      style={{
                        transform: "scale(1.1)",
                        backgroundColor: "rgb(37, 99, 235)",
                      }}
                    >
                      2
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Details</div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-zinc-800 text-zinc-500"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(39, 39, 42)",
                      }}
                    >
                      3
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Examples</div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-zinc-800 text-zinc-500"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(39, 39, 42)",
                      }}
                    >
                      4
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Review</div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Usage Example
                    </label>
                    <input
                      className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
                      placeholder="e.g., eigencode analyze_perf [file_or_dir]"
                      type="text"
                      onChange={(e) =>
                        setNewCommand((prev) => ({
                          ...prev,
                          usageExample: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-zinc-300">Parameters</label>
                    </div>
                    <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
                      <div className="flex justify-between mb-2">
                        <span className="text-zinc-400 text-sm">
                          Parameter 1
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* Name */}
                        <div>
                          <label className="block text-zinc-400 text-xs mb-1">
                            Name
                          </label>
                          <input
                            className="w-full bg-zinc-800 border border-zinc-700 text-white p-1 rounded text-sm"
                            type="text"
                            value={newCommand.parameters[0].name}
                            onChange={(e) => {
                              const updatedParam = {
                                ...newCommand.parameters[0],
                                name: e.target.value,
                              };
                              setNewCommand((prev) => ({
                                ...prev,
                                parameters: [updatedParam],
                              }));
                            }}
                          />
                        </div>

                        {/* Type */}
                        <div>
                          <label className="block text-zinc-400 text-xs mb-1">
                            Type
                          </label>
                          <select
                            className="w-full bg-zinc-800 border border-zinc-700 text-white p-1 rounded text-sm"
                            value={newCommand.parameters[0].type}
                            onChange={(e) => {
                              const updatedParam = {
                                ...newCommand.parameters[0],
                                type: e.target.value,
                              };
                              setNewCommand((prev) => ({
                                ...prev,
                                parameters: [updatedParam],
                              }));
                            }}
                          >
                            <option value="NA">Select a type</option>
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="array">Array</option>
                            <option value="object">Object</option>
                          </select>
                        </div>

                        {/* Description */}
                        <div className="col-span-2">
                          <label className="block text-zinc-400 text-xs mb-1">
                            Description
                          </label>
                          <input
                            className="w-full bg-zinc-800 border border-zinc-700 text-white p-1 rounded text-sm"
                            type="text"
                            value={newCommand.parameters[0].description}
                            onChange={(e) => {
                              const updatedParam = {
                                ...newCommand.parameters[0],
                                description: e.target.value,
                              };
                              setNewCommand((prev) => ({
                                ...prev,
                                parameters: [updatedParam],
                              }));
                            }}
                          />
                        </div>

                        {/* Required checkbox */}
                        <div className="col-span-2">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={
                                newCommand.parameters[0].required || false
                              }
                              onChange={(e) => {
                                const updatedParam = {
                                  ...newCommand.parameters[0],
                                  required: e.target.checked,
                                };
                                setNewCommand((prev) => ({
                                  ...prev,
                                  parameters: [updatedParam],
                                }));
                              }}
                            />
                            <span className="text-zinc-400 text-xs">
                              Required
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700"
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitFeatureModalVisible && currentModalId === 3 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div
              className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{ transform: "none" }}
            >
              <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Submit a Command
                </h2>
                <button
                  className="text-zinc-500 hover:text-zinc-300"
                  onClick={() => {
                    setSubmitFeatureModalVisible(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                {/* Stepper */}
                <div className="flex mb-8 justify-between">
                  {/* Step 1 - Completed */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Basics</div>
                  </div>

                  {/* Step 2 - Completed */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Details</div>
                  </div>

                  {/* Step 3 - Active */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-blue-600 text-white"
                      style={{
                        transform: "scale(1.1)",
                        backgroundColor: "rgb(37, 99, 235)",
                      }}
                    >
                      3
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Examples</div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-zinc-800 text-zinc-500"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(39, 39, 42)",
                      }}
                    >
                      4
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Review</div>
                  </div>
                </div>

                {/* Usage Examples */}
                <div className="space-y-4">
                  {/* Usage Examples */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-zinc-300">Usage Examples</label>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
                        <div className="flex justify-between mb-2">
                          <span className="text-zinc-400 text-sm">
                            Example 1
                          </span>
                        </div>

                        <div className="space-y-3">
                          {/* Description */}
                          <div>
                            <label className="block text-zinc-400 text-xs mb-1">
                              Description
                            </label>
                            <input
                              className="w-full bg-zinc-800 border border-zinc-700 text-white p-1 rounded text-sm"
                              placeholder="What this example demonstrates"
                              type="text"
                              value={newCommand.usageExamples[0].description}
                              onChange={(e) => {
                                const updatedExample = {
                                  ...newCommand.usageExamples[0],
                                  description: e.target.value,
                                };
                                setNewCommand((prev) => ({
                                  ...prev,
                                  usageExamples: [updatedExample],
                                }));
                              }}
                            />
                          </div>

                          {/* Command Code */}
                          <div>
                            <label className="block text-zinc-400 text-xs mb-1">
                              Command Code
                            </label>
                            <div className="relative font-mono text-sm rounded border border-zinc-700 bg-zinc-900 overflow-hidden">
                              <div className="absolute left-0 top-0 bottom-0 w-12 bg-zinc-800 border-r border-zinc-700 flex flex-col items-end pt-2 pb-2 text-zinc-500 select-none">
                                <div className="px-2 text-xs">1</div>
                              </div>
                              <textarea
                                placeholder="eigencode command --option value"
                                className="w-full h-16 bg-transparent pl-14 pr-4 pt-2 pb-2 focus:outline-none resize-none text-green-400"
                                spellCheck="false"
                                value={newCommand.usageExamples[0].commandCode}
                                onChange={(e) => {
                                  const updatedExample = {
                                    ...newCommand.usageExamples[0],
                                    commandCode: e.target.value,
                                  };
                                  setNewCommand((prev) => ({
                                    ...prev,
                                    usageExamples: [updatedExample],
                                  }));
                                }}
                              ></textarea>
                              <div className="absolute right-2 bottom-2 w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rust Implementation Code */}
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Rust Implementation Code (Optional)
                    </label>
                    <p className="text-zinc-500 text-xs mb-2">
                      Provide a sample implementation or pseudocode for how this
                      command might be implemented in Rust.
                    </p>
                    <div className="relative font-mono text-sm rounded border border-zinc-700 bg-zinc-900 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-12 bg-zinc-800 border-r border-zinc-700 flex flex-col items-end pt-2 pb-2 text-zinc-500 select-none">
                        <div className="px-2 text-xs">1</div>
                      </div>
                      <textarea
                        placeholder="pub fn handle_command(args: &ArgMatches) -> io::Result<()> { // Your implementation here }"
                        className="w-full h-48 bg-transparent pl-14 pr-4 pt-2 pb-2 focus:outline-none resize-none text-orange-400"
                        spellCheck="false"
                        value={newCommand.rustImplementationCode}
                        onChange={(e) => {
                          setNewCommand((prev) => ({
                            ...prev,
                            rustImplementationCode: e.target.value,
                          }));
                        }}
                      ></textarea>
                      <div className="absolute right-2 bottom-2 w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700"
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitFeatureModalVisible && currentModalId === 4 && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div
              className="bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              style={{ transform: "none" }}
            >
              <div className="border-b border-zinc-800 p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Submit a Command
                </h2>
                <button
                  className="text-zinc-500 hover:text-zinc-300"
                  onClick={() => {
                    setSubmitFeatureModalVisible(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                {/* Stepper */}
                <div className="flex mb-8 justify-between">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Basics</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Details</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-green-600 text-white"
                      style={{
                        transform: "none",
                        backgroundColor: "rgb(22, 163, 74)",
                      }}
                    >
                      ✓
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Examples</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-blue-600 text-white"
                      style={{
                        transform: "scale(1.1)",
                        backgroundColor: "rgb(37, 99, 235)",
                      }}
                    >
                      4
                    </div>
                    <div className="text-xs mt-1 text-zinc-500">Review</div>
                  </div>
                </div>

                {/* Review Content */}
                <div style={{ opacity: 1, transform: "none" }}>
                  <h3 className="text-xl text-white mb-4">
                    Command Submission Preview
                  </h3>
                  <div className="bg-zinc-800 p-4 rounded border border-zinc-700 mb-6">
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">Name:</span>
                      <p className="text-white">{newCommand.commandName}</p>
                    </div>
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">
                        Description:
                      </span>
                      <p className="text-white">
                        {newCommand.shortDescription}
                      </p>
                    </div>
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">Category:</span>
                      <p className="text-white capitalize">
                        {newCommand.category}
                      </p>
                    </div>
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">Usage:</span>
                      <p className="text-white font-mono">
                        {newCommand.usageExample}
                      </p>
                    </div>
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">Parameters:</span>
                      <ul className="list-disc list-inside text-zinc-300 text-sm mt-1">
                        {newCommand.parameters.map((p) => (
                          <li key={p.name}>
                            {p.name} {p.type && <span>(</span>} {p.type}{" "}
                            {p.type && <span>)</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-3">
                      <span className="text-zinc-500 text-sm">Examples:</span>
                      <ul className="list-disc list-inside text-zinc-300 text-sm mt-1">
                        {newCommand.usageExamples.map((e) => (
                          <li key={e.commandCode}>{e.description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Your command submission will be reviewed by the Eigencode
                    team before being added to the registry. If approved, it
                    will appear in the 'planned' status until implementation is
                    complete.
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700"
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={handleSubmitCommand}
                  >
                    Submit Command
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="scanline" />

        {/* Header */}
        <header className="w-full max-w-6xl flex justify-between items-center mb-16 z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyber-red rounded-full" />
            <div className="w-3 h-3 bg-cyber-yellow rounded-full" />
            <div className="w-3 h-3 bg-cyber-green rounded-full" />
            <span className="text-sm font-mono text-cyber-muted">
              <TypingEffect text="~ eigencode features" speed={80} />
            </span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-cyber-green hover:cyber-text-glow transition-colors"
            >
              $ home
            </Link>
            <Link
              href="/aura"
              className="text-cyber-blue hover:cyber-text-glow transition-colors"
            >
              $ aura
            </Link>
            <Link
              href="/cmds"
              className="text-cyber-yellow hover:cyber-text-glow transition-colors "
            >
              $ cmds
            </Link>
            <Link
              href="/docs"
              className="text-cyber-magenta hover:cyber-text-glow transition-colors"
            >
              $ docs
            </Link>
          </nav>
        </header>

        {/* Terminal Command */}
        <div className="w-full max-w-6xl mb-8 z-10">
          <div className="text-cyber-green font-mono text-sm mb-4">
            eigencode $ view features
          </div>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16 z-10 w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-12 text-cyber-green cyber-text-glow">
            <GlitchText text="> Features" glitchInterval={7000} />
          </h1>

          <p className="text-cyber-muted text-center max-w-2xl mb-12">
            Explore Eigencode's ecosystem of commands, scripts, APIs, and AI
            integrations.
          </p>

          {/* Tabs */}
          <Tabs
            defaultValue="avail"
            className="w-full mb-8"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-transparent border-b border-cyber-green/30 rounded-none h-auto p-0 mb-8">
              <TabsTrigger
                value="avail"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-cyber-green data-[state=active]:text-cyber-green rounded-none px-4 py-2"
              >
                <FaArrowsLeftRight
                  className="text-cyber-green mr-2"
                  aria-label="Arrows Left Right"
                />{" "}
                avail
              </TabsTrigger>
              <TabsTrigger
                value="roadmap"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-cyber-magenta data-[state=active]:text-cyber-magenta rounded-none px-4 py-2"
              >
                <FaCodeBranch
                  className="text-cyber-magenta mr-2"
                  aria-label="Code Branch"
                />{" "}
                roadmap
              </TabsTrigger>
            </TabsList>

            <TabsContent value="avail" className="w-full">
              {/* Command Input and Submit */}
              <div className="flex gap-4 mb-8 items-center">
                <div className="cyber-box flex-1 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-green">{">"}</span>
                    <span className="text-cyber-blue">$</span>
                    <Input
                      className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-cyber-text placeholder:text-cyber-muted"
                      placeholder="commands"
                      defaultValue="commands"
                      readOnly
                    />
                  </div>
                </div>
                <button className="cyber-button-primary px-6 py-3">
                  <span
                    className="relative z-10"
                    onClick={() => setSubmitFeatureModalVisible(true)}
                  >
                    Submit feature
                  </span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={resetCommandFilters}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "noFilter"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => filterByCategory("analysis")}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "analysis"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  Analysis
                </button>
                <button
                  onClick={() => filterByCategory("optimization")}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "optimization"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  Optimization
                </button>
                <button
                  onClick={() => filterByCategory("refactoring")}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "refactoring"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  Refactoring
                </button>
                <button
                  onClick={() => filterByCategory("documentation")}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "documentation"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  Documentation
                </button>
                <button
                  onClick={() => filterByCategory("utility")}
                  className={`px-4 py-2 border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors ${
                    activeFilter === "utility"
                      ? "bg-cyber-blue text-black"
                      : ""
                  }`}
                >
                  Utility
                </button>
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-4 mb-8 text-sm">
                <span className="text-cyber-muted">Sort by:</span>
                <button
                  onClick={() => {
                    handleSort("status");
                    if (sortType === "status") {
                      setSortAscending(!sortAscending);
                    }
                  }}
                  className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                    sortType === "status"
                      ? "bg-zinc-800 text-cyber-blue"
                      : "text-cyber-text hover:text-cyber-blue"
                  }`}
                >
                  Status{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-down transform rotate-180 transition-transform"
                    >
                      {sortType === "status" && sortAscending ? (
                        <>
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </>
                      ) : (
                        <>
                          <path d="m21 8-4-4-4 4"></path>
                          <path d="M17 4v16"></path>
                          <path d="m3 16 4 4 4-4"></path>
                          <path d="M7 20V4"></path>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleSort("az");
                    if (sortType === "az") {
                      setSortAscending(!sortAscending);
                    }
                  }}
                  className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                    sortType === "az"
                      ? "bg-zinc-800 text-cyber-blue"
                      : "text-cyber-text hover:text-cyber-blue"
                  }`}
                >
                  A-Z
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-down transform rotate-180 transition-transform"
                    >
                      {sortType === "az" && sortAscending ? (
                        <>
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </>
                      ) : (
                        <>
                          <path d="m21 8-4-4-4 4"></path>
                          <path d="M17 4v16"></path>
                          <path d="m3 16 4 4 4-4"></path>
                          <path d="M7 20V4"></path>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleSort("popularity");
                    if (sortType === "popularity") {
                      setSortAscending(!sortAscending);
                    }
                  }}
                  className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                    sortType === "popularity"
                      ? "bg-zinc-800 text-cyber-blue"
                      : "text-cyber-text hover:text-cyber-blue"
                  }`}
                >
                  Popularity
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-down transform rotate-180 transition-transform"
                    >
                      {sortType === "popularity" && sortAscending ? (
                        <>
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </>
                      ) : (
                        <>
                          <path d="m21 8-4-4-4 4"></path>
                          <path d="M17 4v16"></path>
                          <path d="m3 16 4 4 4-4"></path>
                          <path d="M7 20V4"></path>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleSort("recent");
                    if (sortType === "recent") {
                      setSortAscending(!sortAscending);
                    }
                  }}
                  className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
                    sortType === "recent"
                      ? "bg-zinc-800 text-cyber-blue"
                      : "text-cyber-text hover:text-cyber-blue"
                  }`}
                >
                  Recent
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-down transform rotate-180 transition-transform"
                    >
                      {sortType === "recent" && sortAscending ? (
                        <>
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </>
                      ) : (
                        <>
                          <path d="m21 8-4-4-4 4"></path>
                          <path d="M17 4v16"></path>
                          <path d="m3 16 4 4 4-4"></path>
                          <path d="M7 20V4"></path>
                        </>
                      )}
                    </svg>
                  </span>
                </button>
              </div>

              {/* Commands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommands.length === 0
                  ? sortCommands(commands).map((command) => (
                      <div
                        key={command.name}
                        className="cyber-box p-6 hover:border-cyber-blue/50 transition-all duration-300 group cursor-pointer"
                        onClick={() => handleCommandClick(command)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-cyber-blue">$</span>
                            <span className="text-cyber-blue font-mono font-bold">
                              {command.name}
                            </span>
                          </div>
                          <Badge
                            className={`text-xs px-2 py-1 ${getStatusBg(
                              command.status
                            )} ${getStatusColor(command.status)}`}
                          >
                            {command.status}
                          </Badge>
                        </div>

                        <p className="text-cyber-text text-sm mb-4 leading-relaxed">
                          {command.description}
                        </p>

                        {command.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {command.tags.map((tag: any) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-cyber-terminal/50 border-cyber-blue/30 text-cyber-blue"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  : sortCommands(filteredCommands).map((command) => (
                      <div
                        key={command.name}
                        className="cyber-box p-6 hover:border-cyber-blue/50 transition-all duration-300 group cursor-pointer"
                        onClick={() => handleCommandClick(command)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-cyber-blue">$</span>
                            <span className="text-cyber-blue font-mono font-bold">
                              {command.name}
                            </span>
                          </div>
                          <Badge
                            className={`text-xs px-2 py-1 ${getStatusBg(
                              command.status
                            )} ${getStatusColor(command.status)}`}
                          >
                            {command.status}
                          </Badge>
                        </div>

                        <p className="text-cyber-text text-sm mb-4 leading-relaxed">
                          {command.description}
                        </p>

                        {command.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {command.tags.map((tag: any) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs px-2 py-0.5 bg-cyber-terminal/50 border-cyber-blue/30 text-cyber-blue"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="roadmap" className="w-full">
              <p className="text-cyber-text mb-8">
                The Eigencode command system is continuously evolving. Below is
                our development timeline and future plans.
              </p>

              {/* Completed Section */}
              <div className="mb-12 relative">
                <div className="absolute left-2 top-2 w-3 h-3 bg-cyber-green rounded-full"></div>
                <div className="pl-10 border-l border-cyber-green/30">
                  <h3 className="text-cyber-green text-xl mb-6">Completed</h3>
                  <p className="text-cyber-text mb-6">
                    Core command infrastructure and essential commands
                    completed.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyber-blue">$</span>
                        <span className="text-cyber-blue font-mono font-bold">
                          open
                        </span>
                      </div>
                      <p className="text-cyber-text text-sm">
                        Open the Eigencode in your working directory or a file
                      </p>
                    </div>
                    <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyber-blue">$</span>
                        <span className="text-cyber-blue font-mono font-bold">
                          setup
                        </span>
                      </div>
                      <p className="text-cyber-text text-sm">
                        Setup the AI configuration you want Eigencode to use
                      </p>
                    </div>
                  </div>

                  <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">
                        explain
                      </span>
                    </div>
                    <p className="text-cyber-text text-sm">
                      Get AI-powered explanation of code
                    </p>
                  </div>
                </div>{/* Close the pl-10 div */}

                {/* Timeline Container */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green via-cyber-yellow to-cyber-blue/30"></div>
                  
                  {/* Completed Section */}
                  <div className="relative pl-12 mb-16 group">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyber-green border-2 border-cyber-green/80 shadow-lg shadow-cyber-green/20 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                    <div className="bg-cyber-card/50 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 shadow-lg hover:border-cyber-green/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-cyber-green/10 text-cyber-green">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-cyber-green">Completed</h3>
                        <span className="ml-auto text-xs px-3 py-1 bg-cyber-green/10 text-cyber-green rounded-full">Version 1.0</span>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-cyber-bg/50 rounded-lg border border-cyber-green/10">
                          <h4 className="font-medium text-cyber-text mb-2">Core Infrastructure</h4>
                          <p className="text-sm text-cyber-muted">
                            Basic command system and UI components are now live and fully functional.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {['Basic Commands', 'UI Components', 'Authentication', 'File Management'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm">
                              <svg className="w-4 h-4 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-cyber-text">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* In Progress Section */}
                  <div className="relative pl-12 mb-16 group">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyber-yellow border-2 border-cyber-yellow/80 shadow-lg shadow-cyber-yellow/20 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                    <div className="bg-cyber-card/50 backdrop-blur-sm border border-cyber-yellow/20 rounded-xl p-6 shadow-lg hover:border-cyber-yellow/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-cyber-yellow/10 text-cyber-yellow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cyber-yellow">In Development</h3>
                          <div className="text-xs text-cyber-muted mt-1">Target: Q3 2025</div>
                        </div>
                        <span className="text-xs px-3 py-1 bg-cyber-yellow/10 text-cyber-yellow rounded-full">65% Complete</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="mb-4">
                          <h4 className="font-medium text-cyber-text mb-3">Advanced Code Analysis</h4>
                          <div className="h-2 bg-cyber-bg rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyber-yellow to-amber-500 transition-all duration-1000"
                              style={{ width: '65%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-cyber-muted mt-1">
                            <span>In Progress</span>
                            <span>65%</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {['Code Quality Metrics', 'Performance Analysis', 'Dependency Mapping', 'Security Scanning'].map((item, i) => (
                            <div key={item} className={`p-3 rounded-lg border ${i < 2 ? 'border-cyber-yellow/30 bg-cyber-yellow/5' : 'border-cyber-border/30'}`}>
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-cyber-yellow' : 'bg-cyber-muted/30'}`}></div>
                                <span className={`text-sm ${i < 2 ? 'text-cyber-text' : 'text-cyber-muted'}`}>
                                  {item}
                                </span>
                                {i < 2 && (
                                  <span className="ml-auto text-xs text-cyber-yellow">
                                    <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
                                      <circle cx="4" cy="4" r="3" />
                                    </svg>
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Planned Section */}
                  <div className="relative pl-12 mb-16 group">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyber-blue border-2 border-cyber-blue/80 shadow-lg shadow-cyber-blue/20 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                    <div className="bg-cyber-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 shadow-lg hover:border-cyber-blue/40 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3v18h18"/>
                            <path d="m19 9-5 5-4-4-3 3"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cyber-blue">Planned Features</h3>
                          <div className="text-xs text-cyber-muted mt-1">Coming Soon</div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { 
                            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 
                            title: 'AI Refactoring',
                            desc: 'Automated code quality improvements and optimizations'
                          },
                          { 
                            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0111-3.5M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                            title: 'Team Collaboration',
                            desc: 'Real-time collaboration features for team-based development'
                          },
                          { 
                            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                            title: 'Security Tools',
                            desc: 'Advanced security scanning and vulnerability detection'
                          },
                          { 
                            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                            title: 'Performance Boost',
                            desc: 'Optimizations for faster code execution and reduced latency'
                          }
                        ].map((feature, i) => (
                          <div key={i} className="p-4 bg-cyber-bg/50 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-1.5 bg-cyber-blue/10 rounded-md">
                                <svg className="w-4 h-4 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                </svg>
                              </div>
                              <h4 className="font-medium text-cyber-text">{feature.title}</h4>
                            </div>
                            <p className="text-sm text-cyber-muted ml-8">{feature.desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-cyber-border/20">
                        <button 
                          onClick={() => setSubmitFeatureModalVisible(true)}
                          className="group flex items-center gap-2 text-sm text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                        >
                          <span>Suggest a Feature</span>
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Community Contributions Section */}
              <div className="mb-12">
                <h3 className="text-cyber-text text-xl mb-6">
                  Community Contributions
                </h3>

                <p className="text-cyber-text mb-8">
                  Help shape the future of Eigencode by contributing your
                  feature ideas. Community contributions help us understand user
                  needs and expand Eigencode's capabilities.
                </p>

                <div className="flex flex-col md:flex-row justify-around">
                  <div>
                    <h4 className="text-cyber-blue font-bold mb-4 text-left">
                      Why Contribute?
                    </h4>
                    <ul className="text-cyber-text text-sm text-left space-y-2 list-inside">
                      <li>• Shape the tool to meet your specific needs</li>
                      <li>• Get recognized in the Eigencode community</li>
                      <li>• Help advance AI-assisted coding tools</li>
                      <li>• Gain experience with next development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-cyber-blue font-bold mb-4 text-left">
                      Contribution Process
                    </h4>
                    <ol className="text-cyber-text text-sm text-left space-y-2 list-inside">
                      <li>1. Submit your feature idea through this form</li>
                      <li>2. Our team reviews the submission</li>
                      <li>3. Approved features get added to the roadmap</li>
                      <li>4. Features are implemented and released</li>
                    </ol>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    className="cyber-button-primary px-6 py-3"
                    onClick={() => setSubmitFeatureModalVisible(true)}
                  >
                    <span className="relative z-10">Submit Feature</span>
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-6xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 bg-cyber-blue animate-blink" />
            <span>COMMANDS STATUS: ONLINE</span>
          </div>
          <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
        </footer>
        {/* Command Details Modal */}
        <CommandDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          command={selectedCommand}
        />
      </div>
  );
}
