export default function H2({ children, className }) {
    return (
        <h2 className={"md:text-6xl text-5xl font-extrabold " + className}>
            { children }
        </h2>
    )
}