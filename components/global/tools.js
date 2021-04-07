import useAckee from "../../hooks/useAckee";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export default function Tools() {
    useAckee();

    if (process.env.NODE_ENV == "development") return <></>;

    // Sentry
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        integrations: [new Integrations.BrowserTracing()],
    
        tracesSampleRate: 1.0,
    });

    return <></>;
}