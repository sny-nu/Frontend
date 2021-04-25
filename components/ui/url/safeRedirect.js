import NormalText from "../text/normalText";

import styles from './url.module.scss';

export default function SafeRedirect({ onChange }) {
    return (
        <label className={styles.safeRedirect}>
            <input 
                type="checkbox" 
                className="form-checkbox-simple" 
                onChange={onChange}
            />
            <NormalText>Do you want a safe redirect?</NormalText>
        </label>
    )
}