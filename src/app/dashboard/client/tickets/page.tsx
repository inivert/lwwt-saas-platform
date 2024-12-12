'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Image, Send } from 'lucide-react'

// Placeholder data - in real app this would come from your database
const tickets = [
  {
    id: 1,
    title: 'Update Homepage Content',
    description: 'Need to update the hero section with new images and text',
    status: 'In Progress',
    priority: 'Medium',
    created: '2024-01-10',
    website: 'restaurant.lwwt.com',
    attachments: ['homepage-mockup.jpg']
  },
  {
    id: 2,
    title: 'Fix Contact Form',
    description: 'Contact form is not sending emails properly',
    status: 'Open',
    priority: 'High',
    created: '2024-01-09',
    website: 'portfolio.lwwt.com',
    attachments: []
  }
]

export default function TicketsPage() {
  const [isCreatingTicket, setIsCreatingTicket] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Support Tickets</h1>
          <p className="text-gray-400">Manage your website update requests and issues</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCreatingTicket(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus className="w-5 h-5" />
          <span>New Ticket</span>
        </motion.button>
      </div>

      {/* New Ticket Form */}
      {isCreatingTicket && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Create New Ticket</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Website
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white">
                <option value="restaurant.lwwt.com">restaurant.lwwt.com</option>
                <option value="portfolio.lwwt.com">portfolio.lwwt.com</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="Brief description of the issue or request"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white h-32"
                placeholder="Detailed explanation of what you need..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Priority
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Attachments
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                <button type="button" className="text-blue-400 hover:text-blue-300">
                  <Image className="w-8 h-8 mx-auto mb-2" />
                  <span>Click to upload or drag and drop</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsCreatingTicket(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Ticket</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Tickets List */}
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{ticket.title}</h3>
                <p className="text-gray-400 text-sm">
                  {ticket.website} • Created on {ticket.created}
                </p>
              </div>
              <div className="flex space-x-2">
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
            <p className="text-gray-300 mb-4">{ticket.description}</p>
            {ticket.attachments.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Attachments:</p>
                <div className="flex space-x-2">
                  {ticket.attachments.map((attachment) => (
                    <div
                      key={attachment}
                      className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300"
                    >
                      {attachment}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
