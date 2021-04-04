export default function UrlInput({ children, onClick, color }) {
    return (
        <button className={`bg-${color}-500 h-12 md:w-48 relative top-0 right-0 text-gray-900 text-base font-bold 
            leading-6 hover:bg-${color}-400 transition duration-500 ease-in-out focus:outline-none
            rounded-full md:rounded-none w-full md:h-16`}
            onClick={onClick}
        >
            { children }
        </button>
    )
}