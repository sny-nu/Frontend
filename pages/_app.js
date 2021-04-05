import { ToastContainer } from 'react-toastify'
import cookie from 'react-cookies'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from '../components/global/cookies';
import '../styles/globals.css'
import { useEffect, useState } from 'react';
import Ackee from '../plugins/ackee';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    // const [snConsent, setSnConsent] = useState(cookie.load("sn-cookie-consent"));

    // // Cookie functions
    // useEffect(async () => {
    //     snConsent == undefined && setSnConsent(await cookie.load("sn-cookie-consent"));
    // }, [snConsent]);

    // function setCookie(e) {
    //     const cookieValue = e.target.value;

    //     setSnConsent(cookieValue);
    //     cookie.save('sn-cookie-consent', cookieValue, {
    //         maxAge: 1000 * 60 * 60 * 24 * 14,
    //         sameSite: 'strict'
    //     })
    // }

    // Ackee
    Ackee();

    // Return
    return (
        <>
            <Head>
                <title>sny.nu ~ url shortener</title>
            </Head>
            {/* { snConsent != undefined ? null : <Cookies onClick={setCookie} /> } */}
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm md:mx-auto" />
        </>
    )
}

export default MyApp
