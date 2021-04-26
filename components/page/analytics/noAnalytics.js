import Container from "../../ui/container";
import H3 from "../../ui/text/h3";
import H5 from "../../ui/text/h5";
import styles from "./analytics.module.scss";
import NormalText from "../../ui/text/normalText";
import Analytics from "./analytics";

export default function NoAnalytics() {
    const exampleStats = {
        clicksToday: 15,
        clicksThisWeek: 93,
        clicksThisMonth: 431,
        clicksThisYear: 1246,
        mostUsedBrowser: "Firefox",
        averageClicksPerDay: 12
    }

    return (
        <>
            <Container className={styles.noAnalytics}>
                <H3>Currently no analytics</H3>
                <NormalText>It looks like your url doesn't have any analytics yet. When people start using your url it will give you a page like below.</NormalText>
            </Container>
            <Analytics stats={exampleStats} hideTitle={true} />
        </>
    )
}