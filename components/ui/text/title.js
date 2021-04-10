export default function Title({ children, className }) {
    return (
        <h5 className={"text-2xl text-white font-extrabold leading-10 sm:leading-none " + className}
        >
            { children }
        </h5>
    )
}