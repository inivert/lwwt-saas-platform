'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Navigation() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">LWWT</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={isActive('/')}>Home</NavLink>
            <NavLink href="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink href="/pricing" active={isActive('/pricing')}>Pricing</NavLink>
            <SignedIn>
              <NavLink href="/dashboard/client" active={isActive('/dashboard/client')}>
                Dashboard
              </NavLink>
            </SignedIn>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "bg-gray-800 border border-gray-700",
                    userButtonPopoverFooter: "hidden",
                    userButtonPopoverActionButton: "text-gray-300 hover:text-white hover:bg-gray-700",
                    userButtonPopoverActionButtonText: "text-gray-300",
                    userButtonPopoverActionButtonIcon: "text-gray-400"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <a
                href="https://bold-filly-25.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fclient"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://bold-filly-25.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fclient"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg"
                >
                  Get Started
                </a>
              </motion.div>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`relative ${
        active ? 'text-white' : 'text-gray-300 hover:text-white'
      } transition-colors`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 right-0 h-0.5 bg-blue-500 bottom-[-4px]"
        />
      )}
    </Link>
  )
}
