import Layout from "../../layouts/default";
import HomeIntro from "../../components/headers/homeIntro";
import { Component } from "react";
import { getUrl } from "../../services/url";
import DefaultErrorPage from 'next/error'
import Redirecter from "../../components/headers/redirecter";
import Threat from "../../components/headers/threat";

export default function UrlPage({ urlData, notFound }) {
    if (notFound) {
        return <DefaultErrorPage statusCode={404} />
    } else {
        return (
            <Layout>
                { urlData.hasThreats == 1 ? (
                    <Threat url={urlData.originalUrl} threats={urlData.threats} />
                ) : (
                    <Redirecter url={urlData.originalUrl} />
                )}
            </Layout>
        )
    }
}

export async function getServerSideProps ({ query, res }) {
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
    if (url == undefined) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            urlData: url
        }
    }
}
