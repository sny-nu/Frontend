import styles from "./url.module.scss";

export default function UrlInput({ children, onClick, color }) {
    let cssColor = ""
    switch(color) {
        case 'red': 
            cssColor = "bg-red-500 hover:bg-red-400";
            break;
        case 'orange': 
            cssColor = "bg-orange-500 hover:bg-orange-400";
            break;
        default:
            cssColor = "bg-green-500 hover:bg-green-400";
            break;
    }
    return (
        <button className={`${cssColor} ${styles.urlButton}`}
            onClick={onClick}
            name="url button"
        >
            { children }
        </button>
    )
}