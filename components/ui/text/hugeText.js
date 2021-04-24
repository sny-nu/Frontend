export default function HugeText({ children, className }) {
    return (
        <p className={"text-white text-5xl font-bold " + className}>
            { children }
        </p>
    )
}