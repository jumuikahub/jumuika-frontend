import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jumuika Hub KE',
  description: 'Your WhatsApp-First Smart Business Toolkit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
