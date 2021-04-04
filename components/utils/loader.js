export default function Loader() {
    return (
        <div v-if="loading" className='flex flex-row w-full items-center text-center justify-self-center relative justify-center'>
            <span className='loading h-full mr-2'></span>
            <p className="text-sm">Loading</p>
        </div>
    )
}