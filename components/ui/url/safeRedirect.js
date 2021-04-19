export default function SafeRedirect({ onChange }) {
    return (
        <label className="inline-flex items-center mt-2">
            <input 
                type="checkbox" 
                className="form-checkbox-simple text-green-500 rounded" 
                onChange={onChange}
            />
            <span className="ml-2 text-gray-400">Do you want a safe redirect?</span>
        </label>
    )
}