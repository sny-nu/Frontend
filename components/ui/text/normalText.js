export default function NormalText({ children, className }) {
    return (
        <p className={"text-base " + className}>
            { children }
        </p>
    )
}