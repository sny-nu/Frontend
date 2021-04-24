import BigText from "../../ui/text/bigText";
import UrlShortener from "../../ui/url/urlShortener";

export default function HomeIntro() {
    return (
        <div className="mx-auto container py-16 md:pt-48 text-center sm:px-4 px-6">
            <h1 className="text-4xl  font-extrabold leading-10
                    sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"
            >
                Shorten your <span className="text-green-500">URLs</span> now <br />
                for <span className="text-green-500">easily</span> sharing.
            </h1>
            <BigText>
                Start shortening your urls right now by filling in the url in the 
                input and click on short it.
            </BigText>
            
            <UrlShortener />
        </div>
    )
}