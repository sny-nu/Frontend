import Layout from "../layouts/default";
import HistoryHeader from "../components/page/history/header";
import Head from 'next/head';

export default function History() {
    return (
        <Layout>
            <Head>
                <title>History | sny.nu</title>
            </Head>
            <HistoryHeader />
        </Layout>
    )
}