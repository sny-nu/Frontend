export default function Card({ children, className }) {
    return (
        <div className={"pt-full bg-gray-700 rounded-xl shadow-lg h-auto w-full " + className}>
            { children }
        </div>
    )
}