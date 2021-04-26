import Link from 'next/link';

import styles from './nav.module.scss';

export default function NavItem({ children, path, onClick, logo }) {
    if (logo) {
        return (
            <Link href={path}>
                <a onClick={onClick}>
                    { children }
                </a>
            </Link>
        )
    }
    return (
        <Link href={path}>
            <a onClick={onClick} className={styles.navItem}>
                { children }
            </a>
        </Link>
    )
}