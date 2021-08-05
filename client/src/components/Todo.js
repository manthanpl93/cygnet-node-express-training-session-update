import API from "../lib/api";
const Todo = ({ todo, todos, setTodos }) => {
  const completeHandler = async () => {
    const updatedTodo = await API.todos.patch(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
    const currentTodos = todos.map((el) => {
      if (el.id === todo.id) {
        return updatedTodo;
      }
      return el;
    });
    setTodos(currentTodos);
  };

  const deleteHandler = async () => {
    await API.todos.delete(todo.id);
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
