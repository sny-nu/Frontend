import BigText from '../components/ui/text/bigText';
import H1 from '../components/ui/text/h1';
import H2 from '../components/ui/text/h2';
import H3 from '../components/ui/text/h3';
import H4 from '../components/ui/text/h4';
import H5 from '../components/ui/text/h5';
import H6 from '../components/ui/text/h6';
import NormalText from '../components/ui/text/normalText';
import HugeText from '../components/ui/text/hugeText';
import SmallText from '../components/ui/text/smallText';
import DefaultLayout from '../layouts/default';

export default function UI() {
    return (
        <DefaultLayout>
            <H1>This is a test sentence for the ui page</H1>
            <H2>This is a test title for the ui page</H2>
            <H3>This is a test title for the ui page</H3>
            <H4>This is a test title for the ui page</H4>
            <H5>This is a test title for the ui page</H5>
            <H6>This is a test title for the ui page</H6>
            <HugeText>This is a test sentence for the ui page</HugeText>
            <BigText>This is a test sentence for the ui page</BigText>
            <NormalText>This is a test sentence for the ui page</NormalText>
            <SmallText>This is a test sentence for the ui page</SmallText>
        </DefaultLayout>
    )
}