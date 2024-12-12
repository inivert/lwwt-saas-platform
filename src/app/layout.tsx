import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navigation from '@/components/shared/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LWWT - Local Web Works Technologies',
  description: 'Professional website development and hosting for small businesses',
  keywords: [
    'website development',
    'web hosting',
    'small business websites',
    'custom websites',
    'web design',
    'website builder',
    'business website'
  ],
  authors: [{ name: 'LWWT', url: 'https://lwwt.com' }],
  creator: 'LWWT'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          card: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700',
          headerTitle: 'text-white',
          headerSubtitle: 'text-gray-300',
          socialButtonsBlockButton: 'border-gray-600 hover:border-gray-500 text-white',
          formButtonPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90',
          formFieldInput: 'bg-gray-700/50 border-gray-600 text-white',
          formFieldLabel: 'text-gray-300',
          formFieldHintText: 'text-gray-400',
          formFieldErrorText: 'text-red-400',
          dividerLine: 'bg-gray-600',
          dividerText: 'text-gray-400',
          footerActionLink: 'text-blue-400 hover:text-blue-300',
          identityPreviewText: 'text-gray-300',
          identityPreviewEditButton: 'text-blue-400 hover:text-blue-300'
        },
        variables: {
          colorPrimary: '#4F46E5',
          colorTextOnPrimaryBackground: '#FFFFFF',
          colorBackground: '#1F2937',
          colorText: '#FFFFFF',
          colorTextSecondary: '#9CA3AF'
        }
      }}
    >
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} bg-gradient-custom min-h-screen antialiased`}>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          
          {/* Toast Container for Notifications */}
          <div id="toast-container" className="fixed top-4 right-4 z-50" />
          
          {/* Portal Container for Modals */}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  )
}
