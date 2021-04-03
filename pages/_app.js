import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer className="rounded-full text-sm" style={{ width: "400px" }} />
        </>
    )
}

export default MyApp
