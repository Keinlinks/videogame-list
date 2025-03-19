import Header from '@/shared/view/components/header'
import './globals.css'
import type { AppProps } from 'next/app'
import Footer from '../shared/view/components/footer'
 
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
   <Component {...pageProps} />
   <Footer/>
  </>
}