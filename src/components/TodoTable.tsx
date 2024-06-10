import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoTable = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const result = await response.json();
        setTodos(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const booleanToString = (value: boolean) => (value ? "true" : "false");

  return (
    <div className="flex flex-col justify-center">
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
            {todos.map(({ userId, id, title, completed }) => (
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
    </div>
  );
};

export default TodoTable;
