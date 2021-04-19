import UrlHolderLayout from "../../ui/url/urlHolderLayout";
import UrlInput from "../../ui/url/urlInput";
import UrlButton from "../../ui/url/urlButton";

export default function Threat({ url, threats }) {
    return (
        <div className="mx-auto container py-20 md:py-48 text-center sm:px-4 px-6">
            <h1 className="text-3xl font-extrabold leading-10 text-red-500
                    sm:text-3xl sm:leading-none md:text-4xl xl:text-3xl"
            >
                Watch out, possible threat like:
            </h1>
            {threats.map((threat) => (
                <h1 key={threat.type} className="text-4xl text-green-500 font-black">
                    {threat.type}
                </h1>
            ))}
            <h1 
                className="text-4xl text-green-500 font-black"
            >
            </h1>
            <p className="max-w-lg mx-auto mt-3 text-sm text-center text-gray-400 
                    md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            >
                To check the URLs that are shortened are safe to use. We use a Web Risk API to check if URLs are registered as unsafe.
            </p>
            <p className="max-w-lg mx-auto mt-3 text-sm text-center text-gray-400 
                    md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            >
                Still wanna go to the URL? Click on the redirect button
            </p>

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