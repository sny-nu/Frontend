import Logo from '../logo';
import { XIcon, MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import NavItem from './navItem';

import styles from './nav.module.scss';

export default function Navbar() {
    const [ isOpen, setOpen ] = useState(false);
    

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__flex}>
                <div className={styles.navbar__left}>
                    <NavItem 
                        path="/"
                        onClick={() => setOpen(isOpen => false)}
                        logo={true}
                    >
                        <Logo className={styles.logo} />
                    </NavItem>
                </div>
                <div className={(isOpen == true ? styles.navbar__middle__mobile : styles.navbar__middle__hidden) + " " + styles.navbar__middle}>
                    <div className={styles.navbar__middle__items}>
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
                <div className={styles.navbar__mobile}>
                    <button 
                        type="button" onClick={() => setOpen(isOpen => !isOpen)} 
                        aria-label="open mobile menu" 
                        >
                        { isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" /> }
                    </button>
                </div>
            </div>
        </nav>
    )
}