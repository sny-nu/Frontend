import { LinkIcon, CursorClickIcon, BanIcon, ShareIcon } from '@heroicons/react/outline'
import Card from "../../ui/card/card";
import IconCardContent from '../../ui/card/iconCardContent';
import Container from '../../ui/container';
import H4 from '../../ui/text/h4';

import styles from './home.module.scss';

export default function HowItWorks() {
    return (
        <Container className={styles.howItWorks}>
            <H4>How it works</H4>
            <div className={styles.howItWorks__background}>
                <div className={styles.howItWorks__gradient}>
                    <div className={styles.howItWorks__grid}>
                        <Card className={styles.howItWorks__card}>
                            <IconCardContent
                                icon={<LinkIcon className={styles.howItWorks__card__icon} />}
                                title="Long Url"
                                description="Have a long url you want to share? Just copy it and put it in the input field."
                            />
                        </Card>
                        <Card className={styles.howItWorks__card}>
                            <IconCardContent
                                icon={<CursorClickIcon className={styles.howItWorks__card__icon} />}
                                title="Shorten"
                                description="To create a sny.nu url, just click on shorten. A random generated hash will now be created to point to your url."
                            />
                        </Card>
                        <Card className={styles.howItWorks__card}>
                            <IconCardContent
                                icon={<BanIcon className={styles.howItWorks__card__icon} />}
                                title="Safety"
                                description="While your url is generated. We check the url on possible threats. Is your url unsafe, we show the visitor of the url the possible threats."
                            />
                        </Card>
                        <Card className={styles.howItWorks__card}>
                            <IconCardContent
                                icon={<ShareIcon className={styles.howItWorks__card__icon} />}
                                title="Share"
                                description="Now that your url is generated and checked. Just click on 'Copy' and share your url."
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    )
}