import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import AboutMe from '@/components/Home/AboutMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Amicrafts </title>
      </Head>
    
      <main>
        <AboutMe/>
      </main>
    </>
  )
}
