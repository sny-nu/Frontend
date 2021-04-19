import Container from "../../ui/container";
import PageTitle from "../../ui/text/pageTitle";
import NormalText from "../../ui/text/normalText";
import HugeText from "../../ui/text/hugeText";
import Card from "../../ui/card";

export default function Analytics() {
    return (
        <Container>
            <PageTitle>Analytics</PageTitle>
            <div className="xl2:mx-48 xl:mx-36 lg:mx-16 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 text-left">
                <Card className="p-6">
                    <NormalText className="mb-4">Clicks Today</NormalText>
                    <div className="flex flex-row">
                        <HugeText>10</HugeText>
                        <NormalText className="ml-1 mt-auto content-end">clicks</NormalText>
                    </div>
                </Card>
                <Card className="p-6">
                    <NormalText className="mb-4">Clicks This Week</NormalText>
                    <div className="flex flex-row">
                        <HugeText>10</HugeText>
                        <NormalText className="ml-1 mt-auto content-end">clicks</NormalText>
                    </div>
                </Card>
                <Card className="p-6">
                    <NormalText className="mb-4">Clicks This Month</NormalText>
                    <div className="flex flex-row">
                        <HugeText>10</HugeText>
                        <NormalText className="ml-1 mt-auto content-end">clicks</NormalText>
                    </div>
                </Card>
                <Card className="p-6">
                    <NormalText className="mb-4">Clicks This Year</NormalText>
                    <div className="flex flex-row">
                        <HugeText>10</HugeText>
                        <NormalText className="ml-1 mt-auto content-end">clicks</NormalText>
                    </div>
                </Card>
                <Card className="p-6">
                    <NormalText className="mb-4">Average Clicks</NormalText>
                    <div className="flex flex-row">
                        <HugeText>5</HugeText>
                        <NormalText className="ml-1 mt-auto content-end">per day</NormalText>
                    </div>
                </Card>
                <Card className="p-6">
                    <NormalText className="mb-4">Most Used Browser</NormalText>
                    <div className="flex flex-row">
                        <HugeText>Firefox</HugeText>
                    </div>
                </Card>
            </div>
        </Container>
    )
}