export default function H3({ children, className }) {
    return (
        <h3 className={"md:text-5xl text-4xl font-extrabold " + className}>
            { children }
        </h3>
    )
}