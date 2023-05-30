import '../styles/global.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
 })


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
    <body>
        <main className='main flex flex-col items-center justify-center bg-dark-100'>
          <div className='gradient'/>
          {children}
        </main>
    </body>
  </html>
  )
}