'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Transform Your Online Presence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We build and host stunning websites for small businesses and content creators, 
              with ongoing support and easy management through our client portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
                >
                  Explore Services
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/pricing"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:bg-white/20 transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="bg-gray-800/50 rounded-xl p-8">
              <div className="text-blue-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Professional Design</h3>
              <p className="text-gray-400">
                Custom-built websites that perfectly match your brand and business needs
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-8">
              <div className="text-blue-400 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Easy Updates</h3>
              <p className="text-gray-400">
                Request changes anytime through our client portal with ticket-based support
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-8">
              <div className="text-blue-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Growth Tools</h3>
              <p className="text-gray-400">
                Built-in SEO optimization and optional add-ons like chatbots and lead generation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join our growing community of successful businesses and take your online presence to the next level.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/sign-up"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block"
              >
                Create Your Website Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
