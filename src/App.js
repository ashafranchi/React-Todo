import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoTasks = [
  {task: "Bake Snickerdoodles",
  id: 1528817084358,
  completed: false}
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todoTasks
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTodoTask = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todoTasks
      ]
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
