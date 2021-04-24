import Link from "next/link";
import SmallText from "../ui/text/smallText";

export default function Footer () {
    return (
        <div className="lg:container lg:mx-auto h-auto md:h-24  text-gray-400 flex text-sm items-center justify-between flex-col md:flex-row lg:px-12 py-6 px-6">
            <SmallText className="py-2 md:py-0">© { new Date().getFullYear() } sny<span className="text-green-500">.</span>nu, All Rights Reserverd</SmallText>
            <div className="md:w-2/4 lg:w-2/5 flex text-center justify-between md:flex-row flex-col">
                <Link href="/policies/terms"><a className="py-2 md:py-0">Terms of Services</a></Link>
                <Link href="/policies/privacy"><a className="py-2 md:py-0">Privacy Policy</a></Link>
            </div>
        </div>
    )
}