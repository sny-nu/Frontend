export default function NormalText({ children }) {
    return (
        <p className="max-w-lg mx-auto mt-3 text-center text-gray-400 
            md:mt-6 text-base md:max-w-xl"
        >
            { children }
        </p>
    )
}