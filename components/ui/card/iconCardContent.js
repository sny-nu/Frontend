import H6 from "../text/h6";
import NormalText from "../text/normalText";

export default function IconCardContent({ icon, title, description}) {
    return (
        <>
            <div className="flex flex-row">
                { icon }
                <H6 className="my-auto">{ title }</H6>
            </div>
            <NormalText className="p-2">
                { description }
            </NormalText>
        </>
    )
}