import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";
import { useState, useEffect } from "react";
import BigText from "../../ui/text/bigText";
import PageTitle from "../../ui/text/pageTitle"

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
            <PageTitle>Redirecting you in:</PageTitle>
            <h1 className={"text-6xl font-black " + (redirectBlocked ? "text-red-500" : (countDown <= 20 ? "text-red-500" : "text-orange-500"))}>
                { redirectBlocked ?  "Stopped" : (countDown == 0 ? "Redirecting" : (countDown / 10).toFixed(1)) }
            </h1>
            <BigText>
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
