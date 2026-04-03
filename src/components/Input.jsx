const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search users..."
            className="w-full rounded-md border bg-gray-50 border-gray-300 px-4 py-2 outline-none focus:border-black"
        />
    );
};

export default Input;