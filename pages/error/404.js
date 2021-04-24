import Link from 'next/link';
import Footer from '../../components/global/footer';
import Navbar from '../../components/global/nav/navbar';
import Head from 'next/head';

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 | sny.nu</title>
            </Head>
            <div className="flex flex-col h-screen  mx-auto">
                <Navbar />
                <div className="m-auto lg:w-10/12 lg:container px-6">
                    <p className="text-7xl font-extrabold mt-4 text-red-500">Error 404</p>
                    <h1 className="text-2xl  font-extrabold leading-10
                        sm:text-3xl sm:leading-none md:text-4xl xl:text-5xl mb-6">
                        Whoops that's weird you found a <span className="text-red-500">URL</span> that doesn't work.
                    </h1>
                    <div>
                        <Link href="/"><a className="bg-gray-700  px-12 py-4 mt-4 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">Home</a></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}