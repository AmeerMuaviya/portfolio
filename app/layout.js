import './globals.css'
import { Inter} from 'next/font/google'
import { fira } from '@/components/Fonts'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ameer Muaviya | Full Stack Adventures',
  description: 'Welcome to my full stack developer portfolio! I am a highly skilled and passionate developer proficient in both React and Node.js. With a keen eye for design and a knack for problem-solving, I specialize in crafting seamless experiences and building robust web applications. Through my portfolio, you\'ll discover a collection of my finest creations, showcasing my expertise in frontend and backend development. From pixel-perfect user interfaces to scalable server-side architectures, I take pride in delivering impactful solutions that transcend boundaries. Join me on this journey as we explore the intersection of creativity and code, and witness the transformative power of technology in action.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tr from-accent-light  from-35% via-teal-500 via-4% to-accent text-white`}>
        {children}
        </body>
    </html>
  )
}
