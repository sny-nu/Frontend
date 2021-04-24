import Link from 'next/link';

export default function NavItem({ children, path, onClick, logo }) {
    if (logo) {
        return (
            <Link href={path}>
                <a onClick={onClick}
                    className="">
                    { children }
                </a>
            </Link>
        )
    }
    return (
        <Link href={path}>
            <a onClick={onClick}
                className="inline-block py-2 mx-2 md:font-medium font-semibold md:px-0 lg:mx-3 md:text-center 
                    focus:text-green-500 hover:text-green-500 transition duration-300 ease-in-out">
                { children }
            </a>
        </Link>
    )
}