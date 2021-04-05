import UrlShortener from "../urlShortener";

export default function HomeIntro() {
    return (
        <div className="mx-auto container py-20 md:py-48 text-center sm:px-4 px-6">
            <h1 className="text-4xl text-white font-extrabold leading-10
                    sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"
            >
                Shorten your <span className="text-green-500">URLs</span> now <br />
                for <span className="text-green-500">easily</span> sharing.
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-sm text-center text-gray-400 
                    md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            >
                Start shortening your urls right now by filling in the url in the 
                input and click on short it.
            </p>
            
            <UrlShortener />

        </div>
    )
}