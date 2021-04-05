import { useEffect } from 'react';
import * as ackeeTracker from 'ackee-tracker';
import { useRouter } from 'next/router';
import cookie from 'react-cookies'

export default function Ackee() {
    const router = useRouter();
    // Ackee -> analytics
    useEffect(() => {
        let isDetailed = false;
        if (cookie.load("sn-cookie-consent") == "true") {
            isDetailed = true;
        }

        console.log(isDetailed);

        const ackee = ackeeTracker.create({
            server: 'https://ackee.thomaur.dev',
            domainId: "df49d72a-4886-431d-b002-5529fac32aec",//'e039a408-3e7d-4f79-b2d8-b6ac13dbfe43',
        }, {
            ignoreLocalhost: false,
            detailed: isDetailed,
        });

        ackee.record()
        const handleRouteChange = (url) => {
            ackee.record();
        }
        router.events.on('routeChangeComplete', handleRouteChange)
    }, [router.events])
}