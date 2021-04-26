import styles from "./utils.module.scss";

export default function Loader() {
    return (
        <div className={styles.loader}>
            <span></span>
            <p>Loading</p>
        </div>
    )
}