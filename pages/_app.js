import Layout from '../comp/Layout'
import TestBase from '../comp/TestBase'
import '../styles/globals.css'

export default function MyApp({Component, pageProps }) {
    return (
       <TestBase>
            <Component {...pageProps} />
       </TestBase>
    )
}