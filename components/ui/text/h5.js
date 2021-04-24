export default function H5({ children, className }) {
    return (
        <h5 className={"md:text-3xl text-2xl font-extrabold " + className}>
            { children }
        </h5>
    )
}