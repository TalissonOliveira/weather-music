import { AppProps } from 'next/app'
import { TrackProvider } from '../context/context'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TrackProvider>
      <Component {...pageProps} />
    </TrackProvider>
  )
}

export default MyApp
