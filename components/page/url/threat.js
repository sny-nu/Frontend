import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";
import H5 from "../../ui/text/h5";
import NormalText from "../../ui/text/normalText";
import BigText from "../../ui/text/bigText";
import H4 from "../../ui/text/h4";

export default function Threat({ url, threats }) {
    return (
        <div className="mx-auto container py-20 md:py-48 text-center sm:px-4 px-6">
            <H5 className="text-red-500">
                Watch out, possible threat like:
            </H5>
            {threats.map((threat) => (
                <H4 key={threat.type} className="text-green-500 font-black">
                    {threat.type}
                </H4>
            ))}
            <BigText className="text-gray-400 max-w-lg mx-auto mt-4">
                To check the URLs that are shortened are safe to use. We use a Web Risk API to check if URLs are registered as unsafe.
            </BigText>

            {/* URL with stop redirect */}
            <UrlHolderLayout>
                <UrlInput url={url} disabled={true}/>
                <UrlButton color="red">
                    Go to page
                </UrlButton>
            </UrlHolderLayout>

        </div>
    )
}