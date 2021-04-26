import HistoryHeader from "../components/page/history/header";
import Head from 'next/head';
import DefaultLayout from "../layouts/default";

export default function History() {
    return (
        <DefaultLayout>
            <Head>
                <title>History | sny.nu</title>
            </Head>
            <HistoryHeader />
        </DefaultLayout>
    )
}