import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <ScrollToTopButton/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
