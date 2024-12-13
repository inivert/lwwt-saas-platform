import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LWWT - Local Web Works Technologies',
  description: 'Professional website development and hosting services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoPlacement: 'inside',
          socialButtonsVariant: 'blockButton',
          logoImageUrl: '/logo.png',
        },
        variables: {
          colorPrimary: '#3b82f6',
          colorTextOnPrimaryBackground: '#ffffff',
        },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard/client"
      afterSignUpUrl="/dashboard/client"
    >
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
