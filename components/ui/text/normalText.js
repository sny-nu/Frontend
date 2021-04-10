export default function NormalText({ children, className }) {
    return (
        <p className={"text-center text-gray-400 text-base " + className}>
            { children }
        </p>
    )
}