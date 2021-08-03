const Todo = ({ todo, todos, setTodos }) => {
  const completeHandler = () => {
    const currentTodos = todos.map((el) => {
      if (el.id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return el;
    });
    setTodos(currentTodos);
  };

  const deleteHandler = () => {
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
