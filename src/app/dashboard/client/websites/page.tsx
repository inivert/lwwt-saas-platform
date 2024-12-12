'use client'

import { motion } from 'framer-motion'
import { Plus, Globe, ExternalLink, Settings, Pencil, BarChart2 } from 'lucide-react'
import Link from 'next/link'

// Placeholder data - in real app this would come from your database
const websites = [
  {
    id: 1,
    name: 'Restaurant Website',
    domain: 'restaurant.lwwt.com',
    template: 'Restaurant Modern',
    status: 'Active',
    lastUpdated: '2024-01-10',
    stats: {
      visitors: '1.2k',
      pageViews: '5.6k',
      bounceRate: '45%'
    }
  },
  {
    id: 2,
    name: 'Portfolio Site',
    domain: 'portfolio.lwwt.com',
    template: 'Portfolio Minimal',
    status: 'Active',
    lastUpdated: '2024-01-09',
    stats: {
      visitors: '567',
      pageViews: '2.3k',
      bounceRate: '38%'
    }
  }
]

export default function WebsitesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Websites</h1>
          <p className="text-gray-400">Manage and monitor your websites</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus className="w-5 h-5" />
          <span>New Website</span>
        </motion.button>
      </div>

      {/* Websites Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {websites.map((website) => (
          <motion.div
            key={website.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden"
          >
            {/* Website Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{website.name}</h2>
                    <p className="text-blue-400">{website.domain}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                  {website.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm">Template: {website.template}</p>
            </div>

            {/* Stats Section */}
            <div className="p-6 border-b border-gray-700">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Visitors</p>
                  <p className="text-xl font-semibold text-white">{website.stats.visitors}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Page Views</p>
                  <p className="text-xl font-semibold text-white">{website.stats.pageViews}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Bounce Rate</p>
                  <p className="text-xl font-semibold text-white">{website.stats.bounceRate}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 grid grid-cols-4 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Pencil className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-xs text-gray-300">Edit</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <Settings className="w-5 h-5 text-purple-400 mb-1" />
                <span className="text-xs text-gray-300">Settings</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <BarChart2 className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-gray-300">Analytics</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-yellow-400 mb-1" />
                <span className="text-xs text-gray-300">Visit</span>
              </motion.button>
            </div>
          </motion.div>
        ))}

        {/* Add New Website Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-700 hover:border-blue-500/50 transition-colors cursor-pointer"
        >
          <div className="p-3 bg-blue-500/10 rounded-full mb-4">
            <Plus className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Add New Website</h3>
          <p className="text-gray-400 text-center">
            Create a new website from our templates
          </p>
        </motion.div>
      </div>
    </div>
  )
}
