import { AppProps } from 'next/app'
import { AppProvider } from '../context/context'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
