export default function H6({ children, className }) {
    return (
        <h6 className={"md:text-2xl text-xl font-extrabold " + className}
        >
            { children }
        </h6>
    )
}