import Header from '@/app/components/header'
import '@/app/globals.css'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
   <Component {...pageProps} />
  </>
}