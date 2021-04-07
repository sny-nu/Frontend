import useAckee from "../../hooks/useAckee";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export default function Tools() {
    useAckee();
    
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        integrations: [new Integrations.BrowserTracing()],
    
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });

    return <></>;
}