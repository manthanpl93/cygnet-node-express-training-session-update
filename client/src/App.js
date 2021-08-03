import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: "",
    };
  }

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
        />
        <TodoList todos={this.state.todos} setTodos={this.setTodos} />
      </div>
    );
  }

  setTodos = (todos) => {
    this.setState({
      todos: todos,
    });
  };

  setInputText = (input) => {
    this.setState({
      inputText: input,
    });
  };
}
