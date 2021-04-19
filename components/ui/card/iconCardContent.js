export default function IconCardContent({ icon, title, description}) {
    return (
        <>
            <div className="flex flex-row">
                { icon }
                <Title className="my-auto">{ title }</Title>
            </div>
            <NormalText className="p-2">
                { description }
            </NormalText>
        </>
    )
}