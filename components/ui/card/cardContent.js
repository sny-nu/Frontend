import NormalText from "../text/normalText";
import H4 from "../text/h4";

export default function CardContent({ title, value, type }) {
    return (
        <>
            <NormalText className="mb-4 text-gray-400">{ title }</NormalText>
            <div className="flex flex-row">
                <H4>{ value }</H4>
                <NormalText className="ml-1 mt-auto content-end text-gray-400">{ type }</NormalText>
            </div>
        </>
    )
}