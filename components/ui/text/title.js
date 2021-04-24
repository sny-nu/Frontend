export default function Title({ children, className }) {
    return (
        <h3 className={"text-2xl text-white font-extrabold leading-10 sm:leading-none " + className}
        >
            { children }
        </h3>
    )
}