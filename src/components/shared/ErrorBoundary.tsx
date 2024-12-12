'use client'

import { motion } from 'framer-motion'
import { AlertCircle, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const isAuthError = error.message.includes('Clerk')
  const isNetworkError = error.message.includes('network') || error.message.includes('fetch')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-red-500/10 rounded-full">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-4">
          {isAuthError
            ? 'Authentication Error'
            : isNetworkError
            ? 'Connection Error'
            : 'Something went wrong'}
        </h1>

        <p className="text-gray-300 mb-8">
          {isAuthError
            ? 'There was a problem with authentication. Please check your configuration or try again later.'
            : isNetworkError
            ? 'Unable to connect to our servers. Please check your internet connection and try again.'
            : error.message}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => reset()}
            className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Try Again</span>
          </motion.button>

          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Return Home
          </Link>
        </div>

        {isAuthError && (
          <div className="mt-8 text-sm text-gray-400">
            <p>
              If this error persists, please check your{' '}
              <code className="bg-gray-700/50 px-2 py-1 rounded">
                .env.local
              </code>{' '}
              configuration or contact support.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
