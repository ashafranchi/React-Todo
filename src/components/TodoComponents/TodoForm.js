import React from "react";

function TodoForm (props) {
    return (
        <form onSubmit={props.addNew}>
            <input
            value={props.todoTask}
            type="text"
            name="todoTask"
            placeholder="New Task"
            onChange={props.handleChanges}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;