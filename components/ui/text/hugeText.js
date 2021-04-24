export default function HugeText({ children, className }) {
    return (
        <p className={" text-5xl font-bold " + className}>
            { children }
        </p>
    )
}