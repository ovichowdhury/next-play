import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

/**
 * App: App component
 * @return {JSX.Element} The JSX Code for the Home Page
 */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
