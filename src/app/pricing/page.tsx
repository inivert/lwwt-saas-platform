'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    description: 'Perfect for small businesses just getting started',
    features: [
      '1 Custom Website',
      'Basic Templates',
      'Client Portal Access',
      '5 Monthly Tickets',
      'SSL Certificate',
      'Daily Backups',
      'Basic SEO Tools',
      'Email Support'
    ]
  },
  {
    name: 'Professional',
    price: { monthly: 79, yearly: 790 },
    description: 'Ideal for growing businesses',
    features: [
      '3 Custom Websites',
      'Premium Templates',
      'Priority Support',
      '15 Monthly Tickets',
      'Advanced SEO Tools',
      'Analytics Dashboard',
      'Custom Domain',
      'Phone Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 199, yearly: 1990 },
    description: 'For businesses needing maximum flexibility',
    features: [
      'Unlimited Websites',
      'All Premium Features',
      'Unlimited Tickets',
      'Dedicated Support',
      'Custom Integrations',
      'AI Chatbot Included',
      'Lead Generation Tools',
      '24/7 Priority Support'
    ]
  }
]

const addons = [
  {
    name: 'AI Chatbot',
    price: { monthly: 29, yearly: 290 },
    description: 'Engage visitors 24/7 with intelligent automated responses'
  },
  {
    name: 'Lead Generation Suite',
    price: { monthly: 39, yearly: 390 },
    description: 'Advanced tools for capturing and nurturing leads'
  },
  {
    name: 'E-commerce Integration',
    price: { monthly: 49, yearly: 490 },
    description: 'Full e-commerce capabilities with payment processing'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full bg-gray-700 transition-colors duration-300"
              >
                <motion.div
                  className="absolute w-6 h-6 bg-white rounded-full top-1"
                  animate={{ left: isYearly ? '2rem' : '0.25rem' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`ml-3 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-green-400">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-600 to-purple-700'
                    : 'bg-gray-800/50'
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-6">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-lg font-normal text-gray-300">
                    /{isYearly ? 'year' : 'mo'}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <Link
                    href="/auth/sign-up"
                    className={`block text-center py-3 px-6 rounded-lg ${
                      plan.popular
                        ? 'bg-white text-blue-600'
                        : 'bg-blue-600 text-white'
                    } font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-gray-300">Enhance your website with powerful features</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                <p className="text-gray-400 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold">
                  ${isYearly ? addon.price.yearly : addon.price.monthly}
                  <span className="text-sm font-normal text-gray-400">
                    /{isYearly ? 'year' : 'mo'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact our team for personalized assistance in choosing the right plan for your business
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
