import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
// import {theme} from '../themes';

function MyApp({ Component, pageProps }) {

  return (
   
   <Component {...pageProps} />  
    
  )
}

export default MyApp
