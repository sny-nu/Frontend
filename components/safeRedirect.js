export default function SafeRedirect({ onChange }) {
    return (
        <label className="inline-flex items-center mt-2">
            <input 
                type="checkbox" 
                className="form-checkbox-simple text-green-500 h-4 w-4 rounded" 
                onChange={onChange}
            />
            <span className="ml-2 text-gray-400">Do you want your url to have a safe redirect?</span>
        </label>
    )
}