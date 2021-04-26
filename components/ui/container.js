export default function Container({ children, className }) {
    return (
        <div className={"lg:container mx-auto w-full lg:px-12 antialiased px-6 pt-6 " + className}>
            { children }
        </div>
    )
}