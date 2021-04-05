import Link from 'next/link';

export default function Cookies({ onClick }) {
    return (
        <section className="bg-gray-800">
            <div className="lg:container mx-auto w-full text-white z-50 md:h-20 flex md:flex-row flex-col items-center justify-between lg:px-12 px-6 py-3 text-xs">
            <p>This site uses cookies to track derivative data. This data and it's <a href="https://ackee.electerious.com" className="italic" target="_blank">tracker called ackee</a> are hosted in-house. 
                    Click on Allow to accept the cookies or decline if you don't want them. Read more by going to our cookie policy or <Link href="/policies/cookies"><a className="italic">clicking here</a></Link></p>
                <div className="md:w-2/5 w-full flex flex-row justify-end md:ml-8 mt-2 md:mt-0">
                    <button
                        value={true}
                        onClick={onClick}
                        name="agree"
                        className="bg-green-500 w-1/2 py-2 mr-2 rounded-md focus:outline-none"
                    >
                        Allow
                    </button> 
                    <button
                        value={false}
                        onClick={onClick}
                        name="decline"
                        className="bg-red-500 w-1/2 py-2 rounded-md focus:outline-none"
                    >
                        Decline
                    </button> 
                </div>
            </div>
        </section>
    )
}