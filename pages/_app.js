import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import themes from './themes';

function MyApp({ Component, pageProps }) {

  return (
   <ThemeProvider theme={themes}>
   <Component {...pageProps} />  
     </ThemeProvider> 
  )
}

export default MyApp
