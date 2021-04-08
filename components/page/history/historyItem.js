import { useState } from "react";
import Copy from "../../global/svg/copy"

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
                <div className="bg-gray-800 rounded-full my-4 md:my-0 text-white flex flex-row">
                    <div className="rounded-full h-14 m-2 w-full bg-green-500 flex items-center justify-center">
                        <span className="text-base font-bold inline-block align-middle">Copied</span>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-800 rounded-full my-4 md:my-0 text-white flex flex-row">
                    <div className="text-left truncate w-11/12 py-4 px-6">
                        <p className="text-base font-bold">{ url.shortUrl }</p>
                        <div className="text-xs truncate">{ url.originalUrl }/123132183198371239812731298373219837129831273891273129387123891273192837129382137192837129381798 312x17n9812nx129x37n1293x71n239712x371237</div>
                    </div>
                    <button className="rounded-full w-16 h-14 m-2 p-auto bg-green-500 focus:outline-none hover:bg-green-400 transition ease-in-out duration-300 hover:text-gray-700" onClick={clickCopy}>
                        <Copy position="center" />
                    </button>
                </div>
            )}
        </>
    )
}