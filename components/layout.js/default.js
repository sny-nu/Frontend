import Footer from "../global/footer";
import Navbar from "../global/navbar";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-900">
            <Navbar />
            <div className="min-h-screen h-full">
                { children }
            </div>
            <Footer />
        </div>
    )
}