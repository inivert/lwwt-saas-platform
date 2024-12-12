'use client'

import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { Globe, Ticket, Clock } from 'lucide-react'

// Placeholder data - in real app, this would come from your database
const websiteStats = {
  totalWebsites: 2,
  activeTickets: 3,
  lastUpdate: '2 hours ago'
}

const recentTickets = [
  {
    id: 1,
    title: 'Update Homepage Content',
    status: 'In Progress',
    created: '2024-01-10',
    priority: 'Medium'
  },
  {
    id: 2,
    title: 'Fix Contact Form',
    status: 'Open',
    created: '2024-01-09',
    priority: 'High'
  },
  {
    id: 3,
    title: 'Add New Product Section',
    status: 'Open',
    created: '2024-01-08',
    priority: 'Low'
  }
]

const websites = [
  {
    id: 1,
    name: 'Restaurant Website',
    domain: 'restaurant.lwwt.com',
    status: 'Active',
    lastUpdated: '2024-01-10'
  },
  {
    id: 2,
    name: 'Portfolio Site',
    domain: 'portfolio.lwwt.com',
    status: 'Active',
    lastUpdated: '2024-01-09'
  }
]

export default function ClientDashboard() {
  const { user } = useUser()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back, {user?.firstName || 'there'}! Here's what's happening with your websites.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
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
              <p className="text-gray-400">Total Websites</p>
              <h3 className="text-2xl font-bold text-white">{websiteStats.totalWebsites}</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Ticket className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-gray-400">Active Tickets</p>
              <h3 className="text-2xl font-bold text-white">{websiteStats.activeTickets}</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-400">Last Update</p>
              <h3 className="text-xl font-bold text-white">{websiteStats.lastUpdate}</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Websites Section */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Your Websites</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3">Name</th>
                <th className="pb-3">Domain</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {websites.map((website) => (
                <tr key={website.id} className="border-b border-gray-700/50">
                  <td className="py-4 text-white">{website.name}</td>
                  <td className="py-4 text-blue-400">{website.domain}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                      {website.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400">{website.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Tickets */}
      <div className="bg-gray-800/30 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Tickets</h2>
        <div className="space-y-4">
          {recentTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
            >
              <div>
                <h3 className="text-white font-medium">{ticket.title}</h3>
                <p className="text-sm text-gray-400">Created on {ticket.created}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  ticket.priority === 'High'
                    ? 'bg-red-500/10 text-red-400'
                    : ticket.priority === 'Medium'
                    ? 'bg-yellow-500/10 text-yellow-400'
                    : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {ticket.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  ticket.status === 'Open'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-purple-500/10 text-purple-400'
                }`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
