import Layout from "../../layouts/default";
import HomeIntro from "../../components/headers/homeIntro";
import { Component } from "react";
import { getUrl } from "../../services/url";
import DefaultErrorPage from 'next/error'
import Redirecter from "../../components/headers/redirecter";


export default class UrlPage extends Component {
    static async getInitialProps ({ query, res }) {
        const urlHash = query.url;
        const url = await getUrl(urlHash);

        // Send user to redirect if it has no threats and safe is turned off
        if (url != undefined) {
            if (url.hasThreats == 0 && url.safeRedirect == 0) {
                res.writeHead(301, {
                    Location: url.originalUrl
                });
                res.end();
            }
        }
        return {
            urlData: url
        }
    }

    render() {
        const url = this.props.urlData;

        if (!url) {
            return <DefaultErrorPage statusCode={404} />
        }
        return (
            <Layout>
                { url.hasThreats == 1 ? (
                    <HomeIntro />
                ) : (
                    <Redirecter url={url.originalUrl} />
                )}
            </Layout>
        )
    }
}
