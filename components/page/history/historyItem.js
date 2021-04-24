import { useState } from "react";
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import NormalText from "../../ui/text/normalText";
import TinyText from '../../ui/text/tinyText';

import styles from './history.module.scss';

export default function HistoryItem({ url }) {
    const [copied, setCopied] = useState(false);

    function clickCopy() {
        navigator.clipboard.writeText(url.shortUrl);
        document.execCommand("copy");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000)
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
                        <NormalText className="font-bold">{ url.shortUrl }</NormalText>
                        <TinyText className="truncate">{ url.originalUrl }</TinyText>
                    </div>
                    <button className={styles.historyItem__button} onClick={clickCopy}>
                        <ClipboardCopyIcon className={styles.historyItem__button__icon} />
                    </button>
                </div>
            )}
        </>
    )
}