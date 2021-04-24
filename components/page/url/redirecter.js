import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";
import { useState, useEffect } from "react";
import BigText from "../../ui/text/bigText";
import H3 from "../../ui/text/h3";
import H2 from "../../ui/text/h2";

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
            <H3>Redirecting you in:</H3>
            <H2 className={"font-black " + (redirectBlocked ? "text-red-500" : (countDown <= 20 ? "text-red-500" : "text-orange-500"))}>
                { redirectBlocked ?  "Stopped" : (countDown == 0 ? "Redirecting" : (countDown / 10).toFixed(1)) }
            </H2>
            <BigText className="max-w-lg mt-4 mx-auto text-gray-400">
                If you don't want to be redirected to this URL please click on the red stop button below to stay on this page.
            </BigText>

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
