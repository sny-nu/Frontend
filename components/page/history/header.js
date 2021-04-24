import { useEffect, useState } from "react";
import HistoryItem from "./historyItem";
import cookie from 'react-cookies';
import BigText from "../../ui/text/bigText";
import Container from "../../ui/container";
import H3 from "../../ui/text/h3";

import styles from "../../../styles/pages/history.module.scss";

export default function HistoryHeader() {
    const [history, setHistory] = useState([]);

    const cookieValue = cookie.load('sn-cookie-consent') === "true";

    useEffect(() => {
        const jsonHistory = localStorage.getItem("sn-history");
        setHistory(JSON.parse(jsonHistory) == null ? [] : JSON.parse(jsonHistory));
    }, []);

    return (
        <Container>
            <H3>
                Your sny<span className="text-green-500">.</span>nu history
            </H3>
            <BigText className="my-6">
                Did you ever make a sny url and lost it? <br />
                Well you found the correct page! Below are all your shortened urls that you made from this webbrowser.
            </BigText>
            { cookieValue ? (
                <div className={styles.history__grid}>
                    {history.map((url) => (
                        <HistoryItem url={url} key={url.hash} />
                    ))}
                </div>
            ) : (
                <BigText>
                    Unfortunatly you haven't accepted cookies or rejected them. <br />
                    This is why you can't see a history of your created sny.nu urls.
                </BigText>
            )
            }
        </Container>
    )
}