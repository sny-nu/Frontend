export default function UrlInput({ url, onChange, disabled }) {
    return (
        <input 
            type="text"
            name="url"
            placeholder="Place your url here"
            className="w-full h-14 px-4 md:px-6 py-2 font-medium text-gray-900 focus:outline-none rounded-full mb-2 md:mb-0 md:h-16 border-none md:mr-2"
            value={url}
            onChange={onChange}
            disabled={disabled}
        />
    )
}