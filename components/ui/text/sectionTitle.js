export default function SectionTitle({ children }) {
    return (
        <h3 className="text-3xl text-white font-extrabold leading-10
            sm:text-4xl sm:leading-none md:text-3xl xl:text-3xl"
        >
            { children }
        </h3>
    )
}