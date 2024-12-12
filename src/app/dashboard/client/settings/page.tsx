'use client'

import { motion } from 'framer-motion'
import { Save, Bell, CreditCard } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

export default function SettingsPage() {
  const { user } = useUser()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={user?.fullName || ''}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={user?.primaryEmailAddress?.emailAddress || ''}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
            />
          </div>
        </div>
      </div>

      {/* Subscription Settings */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Subscription Plan</h2>
            <p className="text-gray-400">Professional Plan - $79/month</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gray-700/50 text-white px-4 py-2 rounded-lg"
          >
            <CreditCard className="w-4 h-4" />
            <span>Change Plan</span>
          </motion.button>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-lg font-medium text-white mb-4">Active Features</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-white font-medium">3 Websites</p>
              <p className="text-gray-400 text-sm">2 of 3 used</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-white font-medium">15 Support Tickets</p>
              <p className="text-gray-400 text-sm">Monthly limit</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-white font-medium">Custom Domain</p>
              <p className="text-gray-400 text-sm">Included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Email Notifications</h3>
              <p className="text-gray-400 text-sm">Receive email updates about your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Website Updates</h3>
              <p className="text-gray-400 text-sm">Get notified about website changes and updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Marketing Updates</h3>
              <p className="text-gray-400 text-sm">Receive news about new features and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </motion.button>
      </div>
    </div>
  )
}
