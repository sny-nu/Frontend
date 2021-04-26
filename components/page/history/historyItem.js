import { useState } from "react";
import { ChartPieIcon, ClipboardCopyIcon } from '@heroicons/react/outline'
import NormalText from "../../ui/text/normalText";
import TinyText from '../../ui/text/tinyText';

import styles from './history.module.scss';
import { useRouter } from "next/router";

export default function HistoryItem({ url }) {
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    function clickCopy() {
        navigator.clipboard.writeText(url.shortUrl);
        document.execCommand("copy");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    function goToAnalytics() {
        router.push(`${url.hash}/analytics`)
    }

    function removeHttp(text) {
        if (text.includes('https://')) {
            return text.replace('https://', '');
        }

        return text.replace('http://', '');
    }

    return(
        <>
            {copied ? (
                <div className={styles.historyItem}>
                    <div className={styles.historyItem__copied}>
                        <NormalText className="font-bold">Copied</NormalText>
                    </div>
                </div>
            ) : (
                <div className={styles.historyItem}>
                    <div className={styles.historyItem__urls}>
                        <NormalText className="font-bold">{ removeHttp(url.shortUrl) }</NormalText>
                        <TinyText className="truncate">{ removeHttp(url.originalUrl) }</TinyText>
                    </div>
                    <button className={styles.historyItem__stats} onClick={goToAnalytics}>
                        <ChartPieIcon className={styles.historyItem__icon} />
                    </button>
                    <button className={styles.historyItem__copy} onClick={clickCopy}>
                        <ClipboardCopyIcon className={styles.historyItem__icon} />
                    </button>
                </div>
            )}
        </>
    )
}