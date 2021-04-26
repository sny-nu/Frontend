import Container from "../../ui/container";
import H2 from "../../ui/text/h2";
import BigText from "../../ui/text/bigText";

import styles from "./error.module.scss";

export default function Error({ statusCode }) {
    let statusText = "Oops something went wrong!"

    if (statusCode == 404) {
        statusText = "This page could not be found!"
    }
    return (
        <Container className={styles.error}>
            <H2>Error {statusCode}</H2>
            <BigText>{statusText}</BigText>
        </Container>
    )
}