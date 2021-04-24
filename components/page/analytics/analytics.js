import Container from "../../ui/container";
import Card from "../../ui/card/card";
import CardContent from "../../ui/card/cardContent";
import H3 from "../../ui/text/h3";

export default function Analytics({ stats }) {
    return (
        <Container>
            <H3>Analytics</H3>
            <div className="xl2:mx-48 xl:mx-36 lg:mx-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 text-left">
                <Card className="p-6">
                    <CardContent 
                        title="Clicks today"
                        value={stats.clicksToday}
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this week"
                        value={stats.clicksThisWeek}
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this month"
                        value={stats.clicksThisMonth}
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this year"
                        value={stats.clicksThisYear}
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Average clicks"
                        value={stats.averageClicksPerDay}
                        type="per day"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Most used browser"
                        value={stats.mostUsedBrowser}
                    />
                </Card>
            </div>
        </Container>
    )
}