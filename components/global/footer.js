import Link from "next/link";
import SmallText from "../ui/text/smallText";

import styles from './global.module.scss';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <SmallText>© { new Date().getFullYear() } sny<span className="text-green-500">.</span>nu, All Rights Reserverd</SmallText>
            <div className={styles.footer__right}>
                <Link href="/policies/terms"><a>Terms of Services</a></Link>
                <Link href="/policies/privacy"><a>Privacy Policy</a></Link>
            </div>
        </div>
    )
}