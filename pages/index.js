import HomeIntro from "../components/page/home/homeIntro";
import HowItWorks from "../components/page/home/howItWorks";
import Navbar from "../components/global/nav/navbar";
import Footer from "../components/global/footer";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.home}>
                <Navbar />
                <HomeIntro />
                <div className="w-full">
                    <ChevronDoubleDownIcon className={styles.arrowDown + " animate-bounce"}/>
                </div>
            </div>
            <HowItWorks />
            <Footer />
        </>
    )
}
