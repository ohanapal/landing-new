import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - OhanaPal',
    default: 'OhanaPal - Independence, Redefined',
  },
  description:
    'OhanaPal empowers neurodivergent individuals and their caregivers with AI-driven tools for independence, skill-building, and meaningful connections. Join the waitlist today to redefine freedom.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
