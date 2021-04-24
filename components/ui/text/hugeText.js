export default function HugeText({ children, className }) {
    return (
        <p className={"text-xl " + className}>
            { children }
        </p>
    )
}