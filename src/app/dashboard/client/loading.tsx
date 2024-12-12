'use client'

import { motion } from 'framer-motion'

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div>
        <div className="h-8 w-48 bg-gray-800 rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-96 bg-gray-800 rounded-lg animate-pulse" />
      </div>

      {/* Stats Overview Skeleton */}
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-lg w-12 h-12 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-700/50 rounded-lg animate-pulse" />
                <div className="h-6 w-16 bg-gray-700/50 rounded-lg animate-pulse" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Websites Section Skeleton */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <div className="h-6 w-32 bg-gray-700/50 rounded-lg animate-pulse mb-6" />
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-16 bg-gray-700/50 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Recent Tickets Skeleton */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <div className="h-6 w-40 bg-gray-700/50 rounded-lg animate-pulse mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-700/50 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full"
        >
          <svg
            className="w-6 h-6 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
