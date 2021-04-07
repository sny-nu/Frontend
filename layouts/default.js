import Footer from "../components/global/footer";
import Navbar from "../components/global/navbar";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-900">
            <div className="min-h-screen h-full">
                <Navbar />
                <main>
                    { children }
                </main>
            </div>
            <Footer />
        </div>
    )
}