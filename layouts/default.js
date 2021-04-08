import Footer from "../components/global/footer";
import Navbar from "../components/global/navbar";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-900">
            <div className="min-h-screen h-full">
                <Navbar />
                <main className="lg:container mx-auto bg-gray-900 w-full lg:px-6 antialiased">
                    { children }
                </main>
            </div>
            <Footer />
        </div>
    )
}