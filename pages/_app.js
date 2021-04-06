import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from '../components/global/cookies';
import '../styles/globals.css'
import Head from 'next/head';
import Ackee from '../plugins/ackee';

import useAckee from 'use-ackee';


function MyApp({ Component, pageProps }) {
    // Ackee
    Ackee();

    // Return
    return (
        <>
            <Head>
                <title>sny.nu ~ url shortener</title>
            </Head>
            <Cookies />
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm md:mx-auto" />
        </>
    )
}

export default MyApp
