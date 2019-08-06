import React from "react";

function TodoForm (props) {
    return (
        <form>
            <input
            onChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="New Task"
            />
            <button onClick={props.handleAddTodo}>Add Task</button>
            <button onClick={props.handleClearTodosCompleted}>Clear Tasks</button>
        </form>
    );
};

export default TodoForm;