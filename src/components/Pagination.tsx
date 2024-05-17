import { useEffect, useState } from "react";

const Pagination = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    setUsers(res.map((user: { name: string }) => user.name));
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {currentUsers.map((user) => (
        <p key={user}>{user}</p>
      ))}

      <div className="flex space-x-4">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
