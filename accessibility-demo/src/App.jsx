import { useState } from 'react'
import './App.css'
import AccessibilityWidget from './components/AccessibilityWidget'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Accessibility Widget for React and Tailwind CSS</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Welcome to our Website</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is a demo page showcasing our accessibility widget. The widget allows users to customize their viewing experience
              based on their accessibility needs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Try clicking the "Accessibility" button on the left side of the screen to see the available options.
            </p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more about web accessibility</a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Features</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li className="mb-2">Font size adjustment</li>
              <li className="mb-2">Dark mode</li>
              <li className="mb-2">High contrast mode</li>
              <li className="mb-2">Underline links</li>
              <li className="mb-2">Big cursor</li>
              <li className="mb-2">Grayscale mode</li>
            </ul>
          </div>
        </div>
        
        <AccessibilityWidget />
      </div>
    </LanguageProvider>
  )
}

export default App
