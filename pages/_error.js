import Navbar from "../components/global/nav/navbar";
import EmptyLayout from "../layouts/empty";
import styles from "../styles/page.module.scss";
import Error from "../components/page/error/error";
import Head from "next/head";

export default function ErrorPage({ statusCode }) {
    console.log(statusCode);
    return (
        <EmptyLayout>
            <Head>
                <title>Error {statusCode} | sny.nu</title>
            </Head>

            <div className={styles.fullScreen}>
                <Navbar />
                <Error statusCode={statusCode}/>
            </div>
        </EmptyLayout>
    )
}

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}