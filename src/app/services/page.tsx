'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Website Development',
    description: 'Custom-built websites tailored to your business needs',
    features: [
      'Responsive Design',
      'Mobile-First Approach',
      'SEO Optimization',
      'Fast Loading Speed',
      'Modern UI/UX',
      'Cross-Browser Compatible'
    ],
    icon: '💻'
  },
  {
    title: 'Website Hosting',
    description: 'Reliable and secure hosting solutions',
    features: [
      '99.9% Uptime',
      'SSL Certificates',
      'Daily Backups',
      'CDN Integration',
      'DDoS Protection',
      'Regular Updates'
    ],
    icon: '🌐'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates through our client portal',
    features: [
      'Ticket System',
      'Priority Support',
      'Regular Updates',
      'Performance Monitoring',
      'Security Patches',
      'Content Updates'
    ],
    icon: '🛠️'
  }
]

const addons = [
  {
    title: 'AI Chatbot',
    description: 'Engage visitors 24/7 with intelligent automated responses',
    icon: '🤖'
  },
  {
    title: 'Lead Generation',
    description: 'Capture and nurture leads with automated follow-ups',
    icon: '📈'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track website performance and visitor behavior',
    icon: '📊'
  },
  {
    title: 'E-commerce Integration',
    description: 'Sell products directly through your website',
    icon: '🛍️'
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive web solutions designed to help your business thrive online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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

          <div className="grid md:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">{addon.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                <p className="text-gray-400">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Choose a plan that works for you and let us help you build your online presence
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
              >
                View Pricing Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
