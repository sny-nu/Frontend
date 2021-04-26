import HomeIntro from "../components/page/home/homeIntro";
import HowItWorks from "../components/page/home/howItWorks";
import Navbar from "../components/global/nav/navbar";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import EmptyLayout from "../layouts/empty";

import styles from "../styles/page.module.scss";

export default function Home() {
    return (
        <EmptyLayout>
            <div className={styles.fullScreen}>
                <Navbar />
                <HomeIntro />
                <div className="w-full">
                    <ChevronDoubleDownIcon className={styles.arrowDown + " animate-bounce"}/>
                </div>
            </div>
            <HowItWorks />
        </EmptyLayout>
    )
}
