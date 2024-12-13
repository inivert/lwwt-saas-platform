'use client'

import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { Globe, MessageSquare } from 'lucide-react'

// Configuration - This will be set via environment variable
const SLACK_CHANNEL_URL = process.env.NEXT_PUBLIC_SLACK_CHANNEL_URL || '#'

export default function ClientDashboard() {
  const { user } = useUser()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.firstName || 'there'}!</p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-400">Your Website</p>
              <h3 className="text-xl font-bold text-white">View Live Site</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-6 cursor-pointer hover:bg-gray-800/70 transition-colors"
          onClick={() => window.open(SLACK_CHANNEL_URL, '_blank')}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-gray-400">Need Help?</p>
              <h3 className="text-xl font-bold text-white">Contact Support</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Support Information */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Support Channel</h2>
        <div className="space-y-4">
          <p className="text-gray-400">
            Need assistance or want to request changes? We're here to help!
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">How to get support:</h3>
            <ol className="list-decimal list-inside text-gray-400 space-y-2">
              <li>Click the "Contact Support" button above</li>
              <li>Join our Slack channel</li>
              <li>Describe your request or issue</li>
              <li>We'll respond during business hours</li>
            </ol>
          </div>
          <p className="text-sm text-gray-500">
            Business hours: Monday to Friday, 9:00 AM - 5:00 PM PST
          </p>
        </div>
      </div>
    </div>
  )
}
