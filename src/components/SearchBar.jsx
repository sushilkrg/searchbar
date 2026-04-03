import { useState } from "react";
import Input from "./Input";
import Suggestions from "./Suggestions";
import { useDebounce } from "../hooks/useDebounce";
import { searchUsers } from "../services/userService";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const { data, loading } = useDebounce(
        query,
        searchUsers,
        500
    );

    return (
        <div className="mx-auto mt-20 w-full max-w-md rounded-lg bg-gray-200 p-6 shadow-md">
            <h1 className="mb-4 text-xl font-semibold">Search Users</h1>

            <Input value={query} onChange={setQuery} />

            {query && (
                <Suggestions users={data} loading={loading} />
            )}
        </div>
    );
};

export default SearchBar;