import { useEffect, useState } from "react";

const useFetchUsers = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, users };
};

const CustomFetchHook = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const { loading, users } = useFetchUsers(API_URL);

  return (
    <div className="flex justify-center">
      {loading && <p>loading...</p>}

      {users && (
        <div>
          {users.map(({ name }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomFetchHook;
