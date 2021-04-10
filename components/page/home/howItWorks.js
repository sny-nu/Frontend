import { LinkIcon, CursorClickIcon, BanIcon, ShareIcon } from '@heroicons/react/outline'
import Card from "../../ui/card";
import SectionTitle from "../../ui/text/sectionTitle";
import Title from '../../ui/text/title';
import NormalText from '../../ui/text/normalText';

export default function HowItWorks() {
    return (
        <div className="lg:container lg:px-24 mx-auto mb-12 px-6 text-center">
            <SectionTitle>How it works</SectionTitle>
            <div className="bg-gray-800 w-full flex-none rounded-3xl">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 mt-12 rounded-3xl transform rotate-2">
                <div className="grid grid-flow-col lg:grid-cols-4 lg:grid-rows-none grid-rows-4 grid-cols-none md:grid-rows-2 md:grid-cols-2 gap-4 text-white">
                    <Card className="p-4 transform -rotate-2">
                        <div className="flex flex-row">
                            <LinkIcon className="w-10 h-10 mr-2" />
                            <Title className="my-auto">Long Url</Title>
                        </div>
                        <NormalText className="p-2">
                            Have a long url you want to share? Just copy it and put it in the input field.
                        </NormalText>
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <div className="flex flex-row">
                            <CursorClickIcon className="w-10 h-10 mr-2" />
                            <Title className="my-auto">Shorten</Title>
                        </div>
                        <NormalText className="p-2">
                            To create a sny<span className="text-green-500">.</span>nu url, just click on shorten. A random generated hash will now be created to point to your url.
                        </NormalText>
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <div className="flex flex-row">
                            <BanIcon className="w-10 h-10 mr-2" />
                            <Title className="my-auto">Safety</Title>
                        </div>
                        <NormalText className="p-2">
                            While your url is generated. We check the url on possible threats. Is your url unsafe, we show the visitor of the url the possible threats.
                        </NormalText>
                    </Card>
                    <Card className="p-4 transform -rotate-2">
                        <div className="flex flex-row">
                            <ShareIcon className="w-10 h-10 mr-2" />
                            <Title className="my-auto">Share</Title>
                        </div>
                        <NormalText className="p-2">
                            Now that your url is generated and checked. Just click on "Copy" and share your url.
                        </NormalText>
                    </Card>
                </div>
            </div>
            </div>
        </div>
    )
}