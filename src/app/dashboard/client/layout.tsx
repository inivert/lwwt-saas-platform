'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { 
  LayoutDashboard, 
  Globe, 
  Ticket, 
  Settings,
  ChevronRight
} from 'lucide-react'

const sidebarLinks = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard/client'
  },
  {
    label: 'My Websites',
    icon: Globe,
    href: '/dashboard/client/websites'
  },
  {
    label: 'Support Tickets',
    icon: Ticket,
    href: '/dashboard/client/tickets'
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/client/settings'
  }
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-800/50 border-r border-gray-700/50 backdrop-blur-sm">
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 px-4 py-8 space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-500/10 text-blue-400' 
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="ml-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-700/50">
            <div className="flex items-center space-x-3 px-4 py-3">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-8 h-8',
                    userButtonPopoverCard: 'bg-gray-800 border border-gray-700',
                    userButtonPopoverFooter: 'hidden',
                    userButtonPopoverActionButton: 'text-gray-300 hover:text-white hover:bg-gray-700',
                    userButtonPopoverActionButtonText: 'text-gray-300',
                    userButtonPopoverActionButtonIcon: 'text-gray-400'
                  }
                }}
              />
              <span className="text-sm text-gray-300">My Account</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
