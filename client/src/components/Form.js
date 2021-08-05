import API from "../lib/api";
const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const inputTextHandler = function (e) {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async function (e) {
    e.preventDefault();
    let currentTodos = todos;
    const todo = await API.todos.create({
      text: inputText,
      completed: false,
    });
    currentTodos.push(todo);
    setTodos(currentTodos);
    setInputText("");
  };

  const statusHandler = function (e) {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
