import BigText from "../../ui/text/bigText";
import H1 from "../../ui/text/h1";
import UrlShortener from "../../ui/url/urlShortener";
import Container from "../../ui/container";


export default function HomeIntro() {
    return (
        <Container className="center">
            <H1>
                Shorten your <span className="text-green-500">URLs</span> now <br />
                for <span className="text-green-500">easily</span> sharing.
            </H1>
            <BigText className="mt-6">
                Start shortening your urls right now by filling in the url in the 
                input and click on short it.
            </BigText>
            
            <UrlShortener />
        </Container>
    )
}