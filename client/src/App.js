import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import API from "./lib/api";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: "",
      filteredTodos: [],
      status: "all",
    };
  }

  componentDidMount = () => {
    this.fetchTodos();
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Cygnet's Todo List</h1>
        </header>
        <Form
          todos={this.state.todos}
          setTodos={this.setTodos}
          inputText={this.state.inputText}
          setInputText={this.setInputText}
          setStatus={this.setStatus}
        />
        <TodoList todos={this.state.filteredTodos} setTodos={this.setTodos} />
      </div>
    );
  }

  setTodos = (todos) => {
    this.setState(
      {
        todos: todos,
      },
      () => {
        this.filterHandler();
      }
    );
  };

  setInputText = (input) => {
    this.setState({
      inputText: input,
    });
  };

  setStatus = (status) => {
    this.setState(
      {
        status: status,
      },
      () => {
        this.filterHandler();
      }
    );
  };

  filterHandler = () => {
    const { todos, status } = this.state;
    switch (status) {
      case "completed":
        this.setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        this.setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        this.setFilteredTodos(todos);
        break;
    }
  };

  setFilteredTodos = (todos) => {
    this.setState({
      filteredTodos: todos,
    });
  };

  fetchTodos = async () => {
    const todos = await API.todos.getAll();
    this.setTodos(todos);
  };
}
