import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor (props) {
    super();
    this.state = {
      todos: [
        {task: "Bake Snickerdoodles",
        id: 123,
        completed: false},
        {task: "Decorate Red Velvet Cake",
        id: 1234,
        completed: false}
      ],
      todo: ""
  };
};

addTodo = e => {
  e.preventDefault();
  const newTodo = {
    task: this.state.todo,
    completed: false,
    id: Date.now()
  };
  this.setState({
    todos: [...this.state.todos, newTodo],
    todo: " "
  });
};

changeTodo = e => this.setState({ [e.target.name]: e.target.value});

toggleTodoComplete = id => {
  console.log(id);
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    })
  })
};

clearTodoCompleted = e => {
  e.preventDefault();
  const todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({ todos });
};

  render() {
    return (
      <div className="TodoApp">
        <h2>Welcome to your Todo App!</h2>
        <div className="Top">
          <TodoList
          handleToggleTodoComplete={this.toggleTodoComplete}
          todos={this.state.todos}
          />
        </div>
        <TodoForm
        value={this.state.todo}
        handleTodoChange={this.changeTodo}
        handleAddTodo={this.addTodo}
        handleClearTodos={this.clearTodoCompleted}
        />
      </div>
    );
  }
}

export default App;
