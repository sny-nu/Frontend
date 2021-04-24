export default function H1({ children, className }) {
    return (
        <h1 className={"md:text-7xl text-4xl font-extrabold " + className}>
            { children }
        </h1>
    )
}