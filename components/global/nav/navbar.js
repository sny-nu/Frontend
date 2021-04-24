import Logo from '../logo';
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import NavItem from './navItem';

export default function Navbar() {
    const [ isOpen, setOpen ] = useState(false);
    

    return (
        <nav className="lg:container mx-auto w-full lg:px-6">
            <div className="flex items-center justify-between px-6 py-3 h-24">
                <div className="z-50 flex flex-row">
                    <NavItem 
                        path="/"
                        onClick={() => setOpen(isOpen => false)}
                    >
                        <Logo className="w-12 h-12 mr-4 cursor-pointer" />
                    </NavItem>
                </div>
                <div className={(isOpen == true ? "z-40 fixed top-0 left-0 h-full w-full bg-gray-900 flex flex-col justify-center" : "hidden") + " md:w-3/4  md:flex-row md:flex"}>
                    <div className="p-0 flex md:flex-row flex-col items-center md:w-2/3  justify-center w-full">
                        <NavItem 
                            path="/"
                            onClick={() => setOpen(isOpen => false)}
                        >
                            Home
                        </NavItem>
                        <NavItem 
                            path="/history"
                            onClick={() => setOpen(isOpen => false)}
                        >
                            History
                        </NavItem>
                    </div>
                </div>
                <div className="md:hidden z-50">
                    <button 
                        type="button" onClick={() => setOpen(isOpen => !isOpen)} 
                        aria-label="open mobile menu" 
                        className="mobileMenu block text-gray-500 pr-3 hover: focus: focus:outline-none"
                        >
                        { isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" /> }
                    </button>
                </div>
            </div>
        </nav>
    )
}