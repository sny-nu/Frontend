import HomeIntro from "../components/page/home/homeIntro";
import HowItWorks from "../components/page/home/howItWorks";
import Navbar from "../components/global/navbar";
import Footer from "../components/global/footer";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

export default function Home() {
    return (
        <div className="bg-gray-900">
            <div className="min-h-screen h-full mx-auto w-full lg:px-6 mb-8 antialiased">
                <Navbar />
                <HomeIntro />
                <div className="w-full">
                    <ChevronDoubleDownIcon className="text-green-500 md:mt-16 w-8 h-8 mx-auto animate-bounce"/>
                </div>
            </div>
            <HowItWorks />
            <Footer />
        </div>
    )
}
