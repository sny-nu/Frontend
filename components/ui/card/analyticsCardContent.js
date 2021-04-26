import NormalText from "../text/normalText";
import H4 from "../text/h4";

import styles from './card.module.scss';

export default function AnalyticsCardContent({ title, value, type }) {
    return (
        <div className={styles.analyticsCardContent}>
            <NormalText className={styles.cardContent__topText}>{ title }</NormalText>
            <div className={styles.analyticsCardContent__data}>
                <H4>{ value }</H4>
                <NormalText>{ type }</NormalText>
            </div>
        </div>
    )
}