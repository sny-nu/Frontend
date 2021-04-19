import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";
import { useState, useEffect } from "react";

export default function Redirecter({ url }) {
    const [countDown, setCountDown] = useState(50);
    const [redirectBlocked, setRedirectBlocked] = useState(false);

    useEffect(() => {
        countDown > 0 && redirectBlocked == false && (setTimeout(() => setCountDown(countDown - 1), 100));
        if (countDown == 0) {
            window.location.href = url;
        }
    }, [countDown]);

    function changeRedirect() {
        if (redirectBlocked == false) {
            setRedirectBlocked(!redirectBlocked);
        } else {
            window.location.href = url;
        }
    }

    return (
        <div className="mx-auto container py-20 md:py-48 text-center sm:px-4 px-6">
            <h1 className="text-2xl text-white font-extrabold leading-10
                    sm:text-3xl sm:leading-none md:text-4xl xl:text-5xl"
            >
                You are going to be redirected in:
            </h1>
            <h1 
                className={"text-6xl font-black " + (redirectBlocked ? "text-red-500" : (countDown <= 20 ? "text-red-500" : "text-orange-500"))}
            >
                { redirectBlocked ?  "Stopped" : (countDown == 0 ? "Redirecting" : (countDown / 10).toFixed(1)) }
            </h1>
            <p className="max-w-lg mx-auto mt-3 text-sm text-center text-gray-400 
                    md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            >
                If you don't want to be redirected to this URL please click on the red stop button below to stay on this page.
            </p>

            {/* URL with stop redirect */}
            <UrlHolderLayout>
                <UrlInput url={url} disabled={true}/>
                <UrlButton color="red" onClick={changeRedirect}>
                    { redirectBlocked ? "Go to page" : "Stop Redirect" }
                </UrlButton>
            </UrlHolderLayout>

        </div>
    )
}
