'use client'

import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { Globe, MessageSquare, TrendingUp, Clock, AlertCircle, FileEdit } from 'lucide-react'
import { useState, useEffect } from 'react'

// Configuration - This will be set via environment variable
const SLACK_CHANNEL_URL = process.env.NEXT_PUBLIC_SLACK_CHANNEL_URL || '#'

// Simple analytics data - In production, this would come from a lightweight analytics service
const analyticsData = {
  pageViews: {
    today: 145,
    week: 876,
    month: 3240
  },
  topPages: [
    { path: '/', views: 523, name: 'Home' },
    { path: '/services', views: 231, name: 'Services' },
    { path: '/contact', views: 187, name: 'Contact' }
  ]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const LoadingSpinner = () => (
  <div className="h-screen flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-t-2 border-blue-500 rounded-full"
    />
  </div>
)

export default function ClientDashboard() {
  const { user, isLoaded: isUserLoaded } = useUser()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isUserLoaded) {
      // Simulate data loading after user is loaded
      const timer = setTimeout(() => setIsLoading(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isUserLoaded])

  // Show loading spinner while user or data is loading
  if (!isUserLoaded || isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div {...fadeInUp}>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back, {user?.firstName || 'there'}!</h1>
        <p className="text-gray-400">Here's how your website is performing</p>
      </motion.div>

      {/* Analytics Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-400">Today's Views</p>
              <h3 className="text-2xl font-bold text-white">{analyticsData.pageViews.today}</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Globe className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-gray-400">Weekly Views</p>
              <h3 className="text-2xl font-bold text-white">{analyticsData.pageViews.week}</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-400">Monthly Views</p>
              <h3 className="text-2xl font-bold text-white">{analyticsData.pageViews.month}</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popular Pages */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        className="bg-gray-800/30 rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Most Visited Pages</h2>
        <div className="space-y-4">
          {analyticsData.topPages.map((page, index) => (
            <div
              key={page.path}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">#{index + 1}</span>
                <span className="text-white">{page.name}</span>
                <span className="text-gray-500 text-sm">{page.path}</span>
              </div>
              <span className="text-blue-400">{page.views} views</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Support Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Request Changes</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-400">
              <FileEdit className="w-5 h-5" />
              <span>Need updates to your website?</span>
            </div>
            <button
              onClick={() => window.open(SLACK_CHANNEL_URL, '_blank')}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Open Change Request</span>
            </button>
            <div className="text-sm text-gray-500">
              Response time: Usually within 24 hours
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/30 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Report an Issue</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-400">
              <AlertCircle className="w-5 h-5" />
              <span>Found a problem with your website?</span>
            </div>
            <button
              onClick={() => window.open(SLACK_CHANNEL_URL, '_blank')}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Report Problem</span>
            </button>
            <div className="text-sm text-gray-500">
              Critical issues are handled within 4 hours
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reporting Guidelines */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.7 }}
        className="bg-gray-800/30 rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4">How to Submit Reports</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">For Change Requests:</h3>
              <ol className="list-decimal list-inside text-gray-400 space-y-2">
                <li>Click "Open Change Request" above</li>
                <li>Use the format: [CHANGE] Your request title</li>
                <li>Describe the desired changes in detail</li>
                <li>Include any reference images if applicable</li>
                <li>Specify the urgency of the change</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">For Problem Reports:</h3>
              <ol className="list-decimal list-inside text-gray-400 space-y-2">
                <li>Click "Report Problem" above</li>
                <li>Use the format: [URGENT] Your issue title</li>
                <li>Describe what's not working</li>
                <li>Include screenshots of the issue</li>
                <li>List steps to reproduce the problem</li>
              </ol>
            </div>
          </div>
          <div className="text-sm text-gray-500 pt-4 border-t border-gray-700">
            <p>Business Hours: Monday to Friday, 9:00 AM - 5:00 PM PST</p>
            <p>Emergency support available 24/7 for critical issues</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
