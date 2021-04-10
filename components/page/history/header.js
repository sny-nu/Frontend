import { useEffect, useState } from "react";
import HistoryItem from "./historyItem";
import cookie from 'react-cookies';
import PageTitle from "../../ui/text/pageTitle";
import BigText from "../../ui/text/bigText";

export default function HistoryHeader() {
    const [history, setHistory] = useState([]);

    const cookieValue = cookie.load('sn-cookie-consent') === "true";

    useEffect(() => {
        const jsonHistory = localStorage.getItem("sn-history");
        setHistory(JSON.parse(jsonHistory) == null ? [] : JSON.parse(jsonHistory));
    }, []);

    return (
        <div className="mx-auto container py-5 text-center sm:px-4 px-6">
            <PageTitle>
                Your sny<span className="text-green-500">.</span>nu history
            </PageTitle>
            <BigText>
                Did you ever make a sny url and lost it? <br />
                Well you found the correct page! Below are all your shortened urls that you made from this webbrowser.
            </BigText>
            { cookieValue ? (
                <div className="md:grid gap-4 m-4 sm:grid-cols-1 md:grid-cols-2 lg:w-12/12 xl:w-8/12 w-full mx-auto mt-6">
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
        </div>
    )
}