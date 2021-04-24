import { useState } from "react";
import { ClipboardCopyIcon } from '@heroicons/react/outline'

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
                <div className="bg-gray-700 rounded-full my-4 md:my-0 text-gray-900 flex flex-row">
                    <div className="rounded-full h-14 m-2 w-full bg-green-500 flex items-center justify-center">
                        <span className="text-base font-bold inline-block align-middle">Copied</span>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-700 rounded-full my-4 md:my-0 flex flex-row">
                    <div className="text-left truncate w-11/12 py-4 px-6">
                        <p className="text-base font-bold">{ url.shortUrl }</p>
                        <div className="text-xs truncate">{ url.originalUrl }</div>
                    </div>
                    <button className="rounded-full w-16 h-14 m-2 p-auto bg-green-500 focus:outline-none hover:bg-green-400 transition ease-in-out duration-300 hover:text-gray-700" onClick={clickCopy}>
                        <ClipboardCopyIcon className="w-6 h-6 mx-auto text-gray-900 " />
                    </button>
                </div>
            )}
        </>
    )
}