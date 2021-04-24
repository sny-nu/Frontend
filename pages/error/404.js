import Link from 'next/link';
import Footer from '../../components/global/footer';
import Navbar from '../../components/global/nav/navbar';
import Head from 'next/head';
import H3 from '../../components/ui/text/h3';
import H1 from '../../components/ui/text/h1';


export default function Error404() {
    return (
        <>
            <Head>
                <title>404 | sny.nu</title>
            </Head>
            <div className="flex flex-col h-screen  mx-auto">
                <Navbar />
                <div className="m-auto max-w-lg lg:container px-6">
                    <H1 className="text-7xl font-extrabold mt-4 text-red-500">Error 404</H1>
                    <H3 className="font-extrabold leading-10
                        text-3xl sm:leading-none md:text-4xl xl:text-5xl mb-6">
                        Whoops that's weird you found a <span className="text-red-500">URL</span> that doesn't work.
                    </H3>
                    <div>
                        <Link href="/"><a className="bg-gray-700  px-12 py-4 mt-4 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">Home</a></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}