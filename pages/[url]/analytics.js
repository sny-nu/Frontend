import Analytics from "../../components/page/analytics/analytics";
import DefaultLayout from "../../layouts/default";
import { getStats } from "../../services/analytics";
import Error404 from "../error/404";

export default function AnalyticsPage({ stats, notFound }) {
    if (notFound) {
        return <Error404 />
    }
    
    return (
        <DefaultLayout>
            <Analytics stats={stats} />
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