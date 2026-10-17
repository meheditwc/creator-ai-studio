import React from 'react'
import { Dashboard } from './pages/Dashboard'
import { CreatorTools } from './pages/CreatorTools'
import { AgentConversation } from './pages/AgentConversation'
import { Settings } from './pages/Settings'
import { ProjectProvider } from './hooks/ProjectProvider'
import { ThemeProvider } from './hooks/ThemeProvider'
import './styles/index.css'

export function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                      Creator AI Studio
                    </h1>
                  </div>
                  <nav className="ml-8 flex space-x-8">
                    <a href="#dashboard" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Dashboard
                    </a>
                    <a href="#tools" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Tools
                    </a>
                    <a href="#agent" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Agent
                    </a>
                    <a href="#settings" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      Settings
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Dashboard />
            <CreatorTools />
            <AgentConversation />
            <Settings />
          </main>
        </div>
      </ProjectProvider>
    </ThemeProvider>
  )
}

export default App