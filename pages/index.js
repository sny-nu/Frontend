import HomeIntro from "../components/page/home/homeIntro";
import HowItWorks from "../components/page/home/howItWorks";
import Navbar from "../components/global/navbar";
import Footer from "../components/global/footer";
import ChevronDown from "../components/global/svg/chevronDown";

export default function Home() {
    return (
        <div className="bg-gray-900">
            <div className="min-h-screen h-full lg:container mx-auto w-full lg:px-6 antialiased">
                <Navbar />
                <HomeIntro />
            </div>
            <HowItWorks />
            <Footer />
        </div>
    )
}
