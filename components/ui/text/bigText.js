export default function BigText({ children, className }) {
    return (
        <p className={"max-w-lg mx-auto mt-3 text-sm text-center text-gray-400 md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-lg " + className}
        >
            { children }
        </p>
    )
}