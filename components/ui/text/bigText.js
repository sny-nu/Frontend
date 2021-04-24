export default function BigText({ children, className }) {
    return (
        <p className={"text-lg " + className}
        >
            { children }
        </p>
    )
}