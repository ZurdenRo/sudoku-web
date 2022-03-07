import Layout from '../comp/Layout'
import '../styles/globals.css'

export default function MyApp({Component, pageProps }) {
    return (
       <Layout>
            <Component {...pageProps} />
       </Layout>
    )
}