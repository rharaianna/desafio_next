import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kumbh_Sans } from 'next/font/google';

const kumbhsans = Kumbh_Sans ({
    subsets: ['latin'],
    weight:'400',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={kumbhsans.className}>
      <div >
        <div >
          <Header/>
          <Component {...pageProps} />
        </div>
        <Footer/>
      </div>
    </div>
    )
}
