import Head from 'next/head';

import { Input } from '../components/ui/input'; // Adjusted path
import { Button } from '../components/ui/button'; // Adjusted path

export default function HomePage() {
  return (
    <>
      {/* Head component removed, metadata handled by layout.tsx in App Router */}
      <main className="flex h-screen bg-gray-900 text-gray-100 font-mono">
        {/* Left Panel: Agent Conversation */}
        <div className="w-1/2 h-full border-r border-gray-700 p-4 flex flex-col space-y-4">
          {/* User Input Area */}
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter your job request..."
              className="flex-grow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
              // Shadcn input has its own dark mode styles, but we can ensure consistency
            />
            <Button
              variant="outline" // Example variant, default might be too light for dark theme
              className="bg-cyan-600 hover:bg-cyan-700 text-white border-cyan-700 hover:border-cyan-800"
            >
              Start Job
            </Button>
          </div>

          {/* Agent Conversation Display */}
          <div className="flex-grow bg-gray-800 border border-gray-700 rounded-md p-3 overflow-y-auto">
            <p className="text-sm text-gray-400">Agent conversations will appear here...</p>
            {/* Example Message Structure */}
            {/*
            <div className="mb-2">
              <p className="font-semibold text-cyan-400">SWE Agent:</p>
              <p className="text-sm whitespace-pre-wrap">Implemented the new feature.</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold text-purple-400">Senior SWE Agent:</p>
              <p className="text-sm whitespace-pre-wrap">Looks good. Please add tests.</p>
            </div>
            */}
          </div>
        </div>

        {/* Right Panel: Code State */}
        <div className="w-1/2 h-full p-4 flex flex-col">
          <div className="flex-grow bg-gray-800 border border-gray-700 rounded-md p-4 overflow-auto">
            <pre className="whitespace-pre-wrap break-all">
              <code className="text-sm">
                {`// Current code state from DB will be displayed here.
// Example:
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));

// Ensure version control display is considered in future updates.
// Max 10 versions.
`}
              </code>
            </pre>
          </div>
        </div>
      </main>
    </>
  );
}
