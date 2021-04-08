import { useEffect, useState } from "react";
import HistoryItem from "./historyItem";

export default function HistoryHeader() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const jsonHistory = localStorage.getItem("sn-history");
        setHistory(JSON.parse(jsonHistory) == null ? [] : JSON.parse(jsonHistory));
    }, []);

    return (
        <div className="mx-auto container py-5 text-center sm:px-4 px-6">
            <h1 className="text-4xl text-white font-extrabold leading-10
                    sm:text-4xl sm:leading-none md:text-5xl xl:text-5xl"
            >
                Your sny<span className="text-green-500">.</span>nu history
            </h1>
            <p className="max-w-lg mx-auto mt-3 text-sm text-center text-gray-400 
                    md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-lg"
            >
                Did you ever make a sny url and lost it? <br />
                Well you found the correct page! Below are all your shortened urls that you made from this webbrowser.
            </p>
            <div className="md:grid gap-4 m-4 sm:grid-cols-1 md:grid-cols-2 lg:w-12/12 xl:w-8/12 w-full mx-auto mt-6">
                {history.map((url) => (
                    <HistoryItem url={url} key={url.hash} />
                ))}
            </div>
        </div>
    )
}