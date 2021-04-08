import { useState, useEffect } from 'react'
import cookie from 'react-cookies';
import * as ackeeTracker from 'ackee-tracker'
import { useRouter } from 'next/router';

const useAckee = () => {
    const [ackee, setAckee] = useState(undefined);
    const router = useRouter();

    const initAckee = () => {
        const cookieValue = cookie.load("sn-cookie-consent") == 'true';

        const ackee = ackeeTracker.create({
            server: process.env.ACKEE_URL,
            domainId: process.env.ACKEE_KEY,
        }, {
            ignoreLocalhost: false,
            detailed: cookieValue,
        });

        ackee.record();

        return ackee;
    }

    useEffect(() => {
        if (ackee) return
        setAckee(initAckee())
    }, [],[router.event]);

    return ackee;
}

export default useAckee
