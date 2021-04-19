import NormalText from "../text/normalText";
import HugeText from "../text/hugeText";

export default function CardContent({ title, value, type }) {
    return (
        <>
            <NormalText className="mb-4">{ title }</NormalText>
            <div className="flex flex-row">
                <HugeText>{ value }</HugeText>
                <NormalText className="ml-1 mt-auto content-end">{ type }</NormalText>
            </div>
        </>
    )
}