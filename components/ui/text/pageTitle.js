export default function PageTitle({ children }) {
    return (
        <h1 className="text-4xl  font-extrabold leading-10
            sm:text-4xl sm:leading-none md:text-5xl xl:text-5xl"
        >
            { children }
        </h1>
    )
}