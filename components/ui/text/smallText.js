export default function SmallText({ children, className }) {
    return (
        <p className={"text-sm " + className}>
            { children }
        </p>
    )
}