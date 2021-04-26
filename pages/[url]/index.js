import { getUrl } from "../../services/url";
import Redirecter from "../../components/page/url/redirecter";
import Threat from "../../components/page/url/threat";
import ErrorPage from '../_error';
import Head from 'next/head';
import EmptyLayout from "../../layouts/empty";
import Navbar from "../../components/global/nav/navbar";

import styles from "../../styles/page.module.scss";

export default function UrlPage({ urlData, notFound, statusCode }) {
    if (notFound) {
        return <ErrorPage statusCode={statusCode} />
    }

    return (
        <EmptyLayout>
            <Head>
                <title>Short Url | sny.nu</title>
            </Head>
            <div className={styles.fullScreen}>
                <Navbar />
                { urlData.hasThreats == 1 ? (
                    <Threat url={urlData.originalUrl} threats={urlData.threats} />
                ) : (
                    <Redirecter url={urlData.originalUrl} />
                )}
            </div>
        </EmptyLayout>
    )
}

export async function getServerSideProps ({ query, res, req }) {
    const userAgent = req.headers['user-agent'];
    const urlHash = query.url;
    const url = await getUrl(urlHash, userAgent);

    // Send user to redirect if it has no threats and safe is turned off
    if (url != undefined) {
        if (url.hasThreats == 0 && url.safeRedirect == 0) {
            res.writeHead(301, {
                Location: url.originalUrl
            });
            res.end();
        }
    } 
    if (url == undefined) {
        return {
            props: {
                notFound: true,
                statusCode: 404
            }
        }
    }
    return {
        props: {
            urlData: url
        }
    }
}
