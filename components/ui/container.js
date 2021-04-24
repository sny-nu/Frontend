export default function Container({ children }) {
    return (
        <div className="mx-auto container py-5 text-center sm:px-4 px-6">
            { children }
        </div>
    )
}