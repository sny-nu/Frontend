import Footer from "../components/global/footer";
import Navbar from "../components/global/nav/navbar";

export default function Layout({ children }) {
    return (
        <div className="">
            <div className="min-h-screen h-full">
                <Navbar />
                <main className="lg:container mx-auto  w-full lg:px-6 antialiased">
                    { children }
                </main>
            </div>
            <Footer />
        </div>
    )
}