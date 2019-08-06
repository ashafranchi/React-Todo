import React from "react";
import Todo from "./Todo";

function TodoList(props) {
    return (
        <div className="List">
            {props.todos.map(todo => (
                <Todo
                handleToggleComplete={props.handleToggleTodoComplete}
                key={todo.id}
                todo={todo}/>
             ))}
        </div>
    );
};

export default TodoList;