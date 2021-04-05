import { useEffect } from 'react';
import * as ackeeTracker from 'ackee-tracker';
import { useRouter } from 'next/router';
import cookie from 'react-cookies'

export default function Ackee() {
    const router = useRouter();
    // Ackee -> analytics
    useEffect(() => {
        // let isDetailed = false;
        // if (cookie.load("sn-cookie-consent") == "true") {
        //     isDetailed = true;
        // }

        const ackee = ackeeTracker.create({
            server: process.env.ACKEE_URL,
            domainId: process.env.ACKEE_KEY,
        }, {
            ignoreLocalhost: false,
            detailed: true,
        });

        ackee.record()
        const handleRouteChange = (url) => {
            ackee.record();
        }
        router.events.on('routeChangeComplete', handleRouteChange)
    }, [router.events])
}