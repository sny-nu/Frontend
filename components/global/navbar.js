import Link from 'next/link';
import Hamburger from './svg/hamburger';
import Close from './svg/close';
import { useState } from 'react';

export default function Navbar() {
    const [ isOpen, setOpen ] = useState(false);

    return (
        <nav className="lg:container mx-auto bg-gray-900 w-full lg:px-6 antialiased max-w-xl">
            <div className="flex items-center justify-between px-6 py-3 h-24">
                <div className="z-50">
                    <Link href="/"><a className="w-1/4 p-1 text-xl font-black leading-none text-white">sny<span className="text-green-500">.</span>nu</a></Link>
                </div>
                <div className={(isOpen == true ? "z-40 fixed top-0 left-0 h-full w-full bg-gray-900 flex flex-col justify-center" : "hidden") + " md:w-3/4  md:flex-row md:flex"}>
                    <div className="p-0 flex md:flex-row flex-col items-center md:w-2/3 text-white justify-center w-full">
                        {/* HomePage */}
                        <Link href="/">
                            <a onClick={() => setOpen(isOpen => false)}
                                className="inline-block py-2 mx-2 md:font-medium font-semibold md:px-0 lg:mx-3 md:text-center 
                                    focus:text-green-500 hover:text-green-500 transition duration-300 ease-in-out">
                                Home
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="md:hidden z-50">
                    <button type="button" onClick={() => setOpen(isOpen => !isOpen)} className="block text-gray-500 pr-3 hover:text-white focus:text-white focus:outline-none">
                        { isOpen ? <Close /> : <Hamburger /> }
                    </button>
                </div>
            </div>
        </nav>
    )
}