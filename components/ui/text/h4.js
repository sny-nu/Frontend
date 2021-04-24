export default function H4({ children, className }) {
    return (
        <h4 className={"md:text-4xl text-3xl font-extrabold " + className}>
            { children }
        </h4>
    )
}