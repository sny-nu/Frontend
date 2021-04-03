import Link from "next/link";

export default function Footer () {
    return (
        <div className="lg:container mx-auto h-auto md:h-24 bg-gray-900 text-gray-700 flex text-sm items-center justify-between flex-col md:flex-row lg:px-12 py-6 px-6">
            <p className="py-2 md:py-0">© { new Date().getFullYear() } sny<span className="text-green-500">.</span>nu, All Rights Reserverd</p>
            <div className="md:w-2/4 lg:w-2/5 flex text-center justify-between md:flex-row flex-col">
                <Link href="/policies/terms-of-services"><a className="py-2 md:py-0">Terms of Services</a></Link>
                <Link href="/policies/privacy"><a className="py-2 md:py-0">Privacy Policy</a></Link>
                <Link href="/contact"><a className="py-2 md:py-0">Contact</a></Link>
            </div>
        </div>
    )
}