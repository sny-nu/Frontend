import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from '../components/global/cookies';
import '../styles/globals.css'
import Head from 'next/head';
import Tools from '../components/global/tools';

function MyApp({ Component, pageProps }) {
    // Return
    return (
        <>
            <Head>
                <title>sny.nu ~ url shortener</title>
            </Head>
            <Tools />
            <Cookies />
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm md:mx-auto" />
        </>
    )
}

export default MyApp
