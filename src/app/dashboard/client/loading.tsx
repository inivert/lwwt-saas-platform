'use client'

import { motion } from 'framer-motion'

const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export default function Loading() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <motion.div
          className="h-10 w-64 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
          {...shimmer}
        />
        <motion.div
          className="h-6 w-96 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
          {...shimmer}
        />
      </div>

      {/* Stats Skeleton */}
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/50 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg"
                {...shimmer}
              />
              <div className="space-y-2">
                <motion.div
                  className="h-4 w-24 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
                  {...shimmer}
                />
                <motion.div
                  className="h-6 w-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
                  {...shimmer}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Skeleton */}
      <motion.div
        className="bg-gray-800/30 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-6 w-48 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded mb-6"
          {...shimmer}
        />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-16 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg"
              {...shimmer}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
