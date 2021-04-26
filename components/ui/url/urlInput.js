import styles from "./url.module.scss";

export default function UrlInput({ url, onChange, disabled, onKeyPress }) {
    return (
        <input 
            type="text"
            name="url"
            placeholder="Place your url here"
            className={styles.urlInput}
            value={url}
            onChange={onChange}
            onKeyPress={onKeyPress}
            disabled={disabled}
        />
    )
}