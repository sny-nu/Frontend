export default function Container({ children, className }) {
    return (
        <div className={"mx-auto container py-5 text-center sm:px-4 px-6 " + className}>
            { children }
        </div>
    )
}