import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'chat',
  description: 'you can chat here idk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-helvetica bg-gradient-to-t from-purple-800 to-purple-500 h-screen'>{children}</body>
    </html>
  )
}
