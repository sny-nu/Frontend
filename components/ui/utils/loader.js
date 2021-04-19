export default function Loader() {
    return (
        <div v-if="loading" className='flex flex-row justify-center'>
            <span className='loading h-full mr-2'></span>
            <p className="text">Loading</p>
        </div>
    )
}