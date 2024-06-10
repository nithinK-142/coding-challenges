import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoTable = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  const booleanToString = (value: boolean) => (value ? "true" : "false");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const result = (await response.json()) as Todo[];
      setTodos(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTodos = todos.filter((todo) =>
    text ? todo.title.toLowerCase().includes(text.toLowerCase()) : []
  );

  const todosPerPage = 10;
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const paginatedTodos = filteredTodos.slice(
    (currentPage - 1) * todosPerPage,
    todosPerPage * currentPage
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <input
        type="text"
        placeholder="Search by title"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-1/2 px-4 py-2 mx-auto my-6 text-black rounded-md"
      />
      {!loading ? (
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTodos.map(({ userId, id, title, completed }) => (
              <tr className="text-center" key={id}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                  <select
                    value={booleanToString(completed)}
                    className="text-black"
                  >
                    <option value={booleanToString(true)}>Yes</option>
                    <option value={booleanToString(false)}>No</option>
                  </select>
                </td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">loading...</p>
      )}
      <div className="flex flex-wrap w-3/4 gap-2 mx-auto">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoTable;
