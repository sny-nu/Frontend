import Analytics from "../../components/page/analytics/analytics";
import NoAnalytics from "../../components/page/analytics/noAnalytics";
import DefaultLayout from "../../layouts/default";
import { getStats } from "../../services/analytics";

export default function AnalyticsPage({ stats, notFound }) {    
    return (
        <DefaultLayout>
            { notFound 
                    ? <NoAnalytics />
                    : <Analytics stats={stats} />
            }
        </DefaultLayout>
    )
}

export async function getServerSideProps ({ query }) {
    const urlHash = query.url;
    const stats = await getStats(urlHash);

    if (stats == undefined) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            stats
        }
    }
}