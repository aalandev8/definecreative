import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Define creative',
  description: 'Landing page for "Define creative" job interview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-stone-900 to-sky-900'>
        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
