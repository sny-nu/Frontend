import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";
import H5 from "../../ui/text/h5";
import BigText from "../../ui/text/bigText";
import H4 from "../../ui/text/h4";
import Container from "../../ui/container";

import styles from "./url.module.scss";

export default function Threat({ url, threats }) {
    return (
        <Container className={styles.center}>
            <H5 className="text-red-500">
                Watch out, possible threat like:
            </H5>
            {threats.map((threat) => (
                <H4 key={threat.type} className="text-green-500 font-black">
                    {threat.type}
                </H4>
            ))}
            <BigText className={styles.center__text}>
                To check the URLs that are shortened are safe to use. We use a Web Risk API to check if URLs are registered as unsafe.
            </BigText>

            {/* URL with stop redirect */}
            <UrlHolderLayout>
                <UrlInput url={url} disabled={true}/>
                <UrlButton color="red">
                    Go to page
                </UrlButton>
            </UrlHolderLayout>

        </Container>
    )
}