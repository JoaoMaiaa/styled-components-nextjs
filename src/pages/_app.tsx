import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Styled-Components</title>
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>    
  )
}

export default MyApp
