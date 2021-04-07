export default function UrlHolderLayout({ children }) {
    return (
        <div className="relative flex md:flex-row flex-col items-center max-w-2xl mx-auto mt-12 overflow-hidden text-center md:rounded-full md:h-16">
            { children }
        </div>
    )
}