import H6 from "../text/h6";
import NormalText from "../text/normalText";

import styles from './card.module.scss';

export default function IconCardContent({ icon, title, description}) {
    return (
        <div className={styles.iconCardContent}>
            <div className={styles.iconCardContent__icon}>
                { icon }
                <H6>{ title }</H6>
            </div>
            <NormalText>
                { description }
            </NormalText>
        </div>
    )
}