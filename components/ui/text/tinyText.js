export default function TinyText({ children, className }) {
    return (
        <p className={"text-xs " + className}>
            { children }
        </p>
    )
}