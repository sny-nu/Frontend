import { ToastContainer } from 'react-toastify'
import cookie from 'react-cookies'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from '../components/global/cookies';
import '../styles/globals.css'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [snConsent, setSnConsent] = useState(undefined);

    useEffect(() => {
        snConsent == undefined && setSnConsent(cookie.load("sn-cookie-consent"));
    }, [snConsent]);

    function setCookie(e) {
        const cookieValue = e.target.value;

        const expires = new Date()
            expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)

        setSnConsent(cookieValue);
        cookie.save('sn-cookie-consent', cookieValue, {
            expires
        })
    }

    return (
        <>
            { snConsent === undefined ? <Cookies onClick={setCookie} /> : null }
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm" style={{ width: "400px" }} />
        </>
    )
}

export default MyApp
