import Container from "../../ui/container";
import PageTitle from "../../ui/text/pageTitle";
import Card from "../../ui/card/card";
import CardContent from "../../ui/card/cardContent";

export default function Analytics() {
    return (
        <Container>
            <PageTitle>Analytics</PageTitle>
            <div className="xl2:mx-48 xl:mx-36 lg:mx-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 text-left">
                <Card className="p-6">
                    <CardContent 
                        title="Clicks today"
                        value="10"
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this week"
                        value="70"
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this month"
                        value="310"
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Clicks this year"
                        value="3650"
                        type="clicks"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Average clicks"
                        value="10"
                        type="per day"
                    />
                </Card>
                <Card className="p-6">
                    <CardContent 
                        title="Most used browser"
                        value="Firefox"
                    />
                </Card>
            </div>
        </Container>
    )
}