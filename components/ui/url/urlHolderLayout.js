import styles from "./url.module.scss";

export default function UrlHolderLayout({ children }) {
    return (
        <div className={styles.urlHolder}>
            { children }
        </div>
    )
}