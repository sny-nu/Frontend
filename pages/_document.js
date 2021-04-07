import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta property="og:title" content="sny.nu ~ free url shortener" key="title" />
                    <meta property="og:description" content="This free URL shortener lets you shorten your URL to a URL that is easily sharable. 
                        This allows you to make the URLs shorter and more sharable with people. So go and shorten your URLs now 
                        at sny.nu. sny.nu also includes a safe version, this means that if we think your URL is unsafe or you 
                        want a safe URL to share it comes with a countdown and possibility to stop the redirect." key="description" />
                    <meta name="description" content="This free URL shortener lets you shorten your URL to a URL that is easily sharable. 
                        This allows you to make the URLs shorter and more sharable with people. So go and shorten your URLs now 
                        at sny.nu. sny.nu also includes a safe version, this means that if we think your URL is unsafe or you 
                        want a safe URL to share it comes with a countdown and possibility to stop the redirect." />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_GB" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
