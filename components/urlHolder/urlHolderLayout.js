export default function UrlHolderLayout({ children }) {
    return (
        <div className="relative flex md:flex-row flex-col items-center max-w-2xl mx-auto mt-12 overflow-hidden text-center rounded-3xl md:rounded-full md:h-20 bg-gray-700 p-2">
            { children }
        </div>
    )
}