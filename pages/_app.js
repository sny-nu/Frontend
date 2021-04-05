import { ToastContainer } from 'react-toastify'
import cookie from 'react-cookies'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from '../components/global/cookies';
import '../styles/globals.css'
import { useEffect, useState } from 'react';
import Ackee from '../plugins/ackee';

function MyApp({ Component, pageProps }) {
    const [snConsent, setSnConsent] = useState(cookie.load("sn-cookie-consent"));

    // Cookie functions
    useEffect(async () => {
        snConsent == undefined && setSnConsent(await cookie.load("sn-cookie-consent"));
    }, [snConsent]);

    function setCookie(e) {
        const cookieValue = e.target.value;

        setSnConsent(cookieValue);
        cookie.save('sn-cookie-consent', cookieValue, {
            maxAge: 1000 * 60 * 60 * 24 * 14,
            sameSite: 'strict'
        })
    }

    // Ackee
    Ackee();

    // Return
    return (
        <>
            { snConsent != undefined ? null : <Cookies onClick={setCookie} /> }
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm" style={{ width: "400px" }} />
        </>
    )
}

export default MyApp
