export default function UrlInput({ url, onChange, disabled }) {
    return (
        <input 
            type="text"
            name="url"
            placeholder="Place your url here"
            className="w-full h-12 px-4 md:px-6 py-2 font-medium text-gray-900 focus:outline-none rounded-full mb-2 md:mb-0 md:rounded-none md:h-16 border-none"
            value={url}
            onChange={onChange}
            disabled={disabled}
        />
    )
}