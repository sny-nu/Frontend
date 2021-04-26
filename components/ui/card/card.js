import styles from './card.module.scss';

export default function Card({ children, className }) {
    return (
        <div className={`${styles.card} ${className}`}>
            { children }
        </div>
    )
}