import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexflow - Project Management That Thinks With You',
  description: 'AI-powered project management for modern teams. Ship faster, collaborate smarter.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* VeroBehavior snippet - uncomment to activate behavioral tracking */}
        {/* <script src="https://verobehavior.vercel.app/api/snippet?key=nexflow" async /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
