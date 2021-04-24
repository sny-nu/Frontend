import { LinkIcon, CursorClickIcon, BanIcon, ShareIcon } from '@heroicons/react/outline'
import Card from "../../ui/card/card";
import SectionTitle from "../../ui/text/sectionTitle";
import IconCardContent from '../../ui/card/iconCardContent';

export default function HowItWorks() {
    return (
        <div className="lg:container lg:px-24 mx-auto mb-12 px-6 text-center">
            <SectionTitle>How it works</SectionTitle>
            <div className="bg-gray-800 w-full flex-none rounded-3xl">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 mt-12 rounded-3xl transform rotate-2">
                <div className="grid grid-flow-col lg:grid-cols-4 lg:grid-rows-none grid-rows-4 grid-cols-none md:grid-rows-2 md:grid-cols-2 gap-4 ">
                    <Card className="p-4 transform -rotate-2">
                        <IconCardContent
                            icon={<LinkIcon className="w-10 h-10 mr-2" />}
                            title="Long Url"
                            description="Have a long url you want to share? Just copy it and put it in the input field."
                        />
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <IconCardContent
                            icon={<CursorClickIcon className="w-10 h-10 mr-2" />}
                            title="Shorten"
                            description="To create a sny.nu url, just click on shorten. A random generated hash will now be created to point to your url."
                        />
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <IconCardContent
                            icon={<BanIcon className="w-10 h-10 mr-2" />}
                            title="Safety"
                            description="While your url is generated. We check the url on possible threats. Is your url unsafe, we show the visitor of the url the possible threats."
                        />
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <IconCardContent
                            icon={<ShareIcon className="w-10 h-10 mr-2" />}
                            title="Share"
                            description="Now that your url is generated and checked. Just click on 'Copy' and share your url."
                        />
                    </Card>
                </div>
            </div>
            </div>
        </div>
    )
}