export const searchUsers = async (query) => {
  if (!query.trim()) return [];

  const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
  const data = await response.json();

  return data.users;
};
