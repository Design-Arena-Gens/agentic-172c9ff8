import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nivora - Artisan Home Bakery',
  description: 'Handcrafted cakes and pastries made with love by a passionate couple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
