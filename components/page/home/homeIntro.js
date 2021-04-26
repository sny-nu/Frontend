import BigText from "../../ui/text/bigText";
import H1 from "../../ui/text/h1";
import UrlShortener from "../../ui/url/urlShortener";
import Container from "../../ui/container";

import styles from './home.module.scss';

export default function HomeIntro() {
    return (
        <Container className={styles.homeIntro}>
            <H1>
                Shorten your <span>URLs</span> now <br />
                for <span>easily</span> sharing.
            </H1>
            <BigText>
                Start shortening your urls right now by filling in the url in the 
                input and click on short it.
            </BigText>
            
            <UrlShortener />
        </Container>
    )
}