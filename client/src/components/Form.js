const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = function (e) {
    setInputText(e.target.value);
  };

  const submitTodoHandler = function (e) {
    e.preventDefault();
    let currentTodos = todos;
    currentTodos.push({
      id: Math.random(),
      text: inputText,
      completed: false,
    });
    setTodos(currentTodos);
    setInputText("");
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
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
