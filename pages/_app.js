import { ThemeProvider } from 'styled-components'
import ShortenedLinkProvider from '../context/ShortenedLinksContext'
import '../styles/globals.css'
import GlobalSpinnerProvider from '../context/globalSpinnerContext';

// import {theme} from '../themes';

function MyApp({ Component, pageProps }) {

  return (
   <GlobalSpinnerProvider>
   <ShortenedLinkProvider>
   <Component {...pageProps} />
   </ShortenedLinkProvider>
   </GlobalSpinnerProvider>
       
  )
}

export default MyApp
