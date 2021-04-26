import Container from "../../ui/container";
import Card from "../../ui/card/card";
import AnalyticsCardContent from "../../ui/card/analyticsCardContent";
import H3 from "../../ui/text/h3";

import styles from "./analytics.module.scss";

export default function Analytics({ stats, hideTitle }) {
    return (
        <Container className={styles.analytics}>
            { hideTitle ? <></> : <H3>Analytics</H3>}
            <div className={styles.analytics__grid}>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Clicks today"
                        value={stats.clicksToday}
                        type="clicks"
                    />
                </Card>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Clicks this week"
                        value={stats.clicksThisWeek}
                        type="clicks"
                    />
                </Card>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Clicks this month"
                        value={stats.clicksThisMonth}
                        type="clicks"
                    />
                </Card>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Clicks this year"
                        value={stats.clicksThisYear}
                        type="clicks"
                    />
                </Card>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Average clicks"
                        value={stats.averageClicksPerDay}
                        type="per day"
                    />
                </Card>
                <Card className={styles.analytics__card}>
                    <AnalyticsCardContent 
                        title="Most used browser"
                        value={stats.mostUsedBrowser}
                    />
                </Card>
            </div>
        </Container>
    )
}