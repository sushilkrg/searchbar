
const Suggestions = ({ users, loading }) => {
    if (loading) {
        return (
            <div className="mt-2 rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-500">
                Loading...
            </div>
        );
    }

    if (!users.length) {
        return (
            <div className="mt-2 rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-500">
                No users found
            </div>
        );
    }

    return (
        <div className="mt-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="cursor-pointer border-b border-gray-100 px-4 py-3 text-sm hover:bg-gray-50 last:border-none"
                >
                    {user.firstName} {user.lastName}
                </div>
            ))}
        </div>
    );
};

export default Suggestions;