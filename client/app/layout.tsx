import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body dir='rtl' className='bg-darkest'>
            <header>
                <Navbar />
            </header>
            
            <main>
              {children}
            </main>
            
      </body>
    </html>
  )
}
