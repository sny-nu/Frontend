import Link from 'next/link';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import SmallText from '../ui/text/smallText';

import styles from './global.module.scss';

export default function Cookies() {
    const [show, setShow] = useState(false);

    const expires = new Date()

    const allowCookies = () => {
        setShow(false);
        cookie.save("sn-cookie-consent", true, {
            maxAge: 365 * 86400,
            sameSite: "strict"
        })
    }

    const disallowCookies = () => {
        setShow(false);
        cookie.save("sn-cookie-consent", false, {
            maxAge: 365 * 86400,
            sameSite: "strict"
        })
    }

    useEffect(() => {
        setShow(cookie.load("sn-cookie-consent") === undefined)
    }, [])

    return show ? (
        <section className={styles.cookies}>
            <div className={styles.cookies__container}>
                <SmallText>This site uses cookies to track derivative data. This data and it's <a href="https://ackee.electerious.com" className="italic" target="_blank">tracker called ackee</a> are hosted in-house. 
                    Click on Allow to accept the cookies or decline if you don't want them. Read more by going to our cookie policy or <Link href="/policies/cookies"><a className="italic">clicking here</a></Link></SmallText>
                <div className={styles.cookies__buttons}>
                    <button
                        onClick={allowCookies}
                        name="agree"
                        className={styles.cookies__accept}
                    >
                        Allow
                    </button> 
                    <button
                        onClick={disallowCookies}
                        name="decline"
                        className={styles.cookies__decline}
                    >
                        Decline
                    </button> 
                </div>
            </div>
        </section>
    ) : ( 
        <></>
    )
}