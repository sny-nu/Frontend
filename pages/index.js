import Layout from "../components/layout.js/default";
import HomeIntro from "../components/headers/homeIntro";
import Navbar from "../components/global/navbar";
import { createUrl } from '../services/url';

export default function Home() {
    return (
        <Layout>
            <HomeIntro />
        </Layout>
    )
}
