import Footer from "../components/global/footer";
import Navbar from "../components/global/nav/navbar";

export default function DefaultLayout({ children }) {
    return (
        <>
            <div className="min-h-screen h-full relative">
                <Navbar />
                { children }
            </div>
            <Footer />
        </>
    )
}