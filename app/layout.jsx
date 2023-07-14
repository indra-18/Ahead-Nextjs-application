import Navbar from '@components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Ahead',
  description: 'Master your life by mastering your emotions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}
