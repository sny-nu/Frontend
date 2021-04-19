export default function UrlInput({ children, onClick, color }) {
    let cssColor = ""
    switch(color) {
        case 'red': 
            cssColor = "bg-red-500 hover:bg-red-400";
            break;
        case 'orange': 
            cssColor = "bg-orange-500 hover:bg-orange-400";
            break;
        default:
            cssColor = "bg-green-500 hover:bg-green-400";
            break;
    }
    return (
        <button className={`${cssColor} h-14 md:w-48 relative top-0 right-0 text-gray-900 text-base font-bold 
            leading-6 transition duration-500 ease-in-out focus:outline-none
            rounded-full w-full md:h-16`}
            onClick={onClick}
            name="url button"
        >
            { children }
        </button>
    )
}