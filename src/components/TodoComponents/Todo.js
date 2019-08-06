import React from "react";

function todo(props) {
    console.log(props);
    return(
        <div className={props.todo.completed ? "strike-through" : null}
        onClick={() => props.handleToggleComplete(props.todo.id)}>
        {props.todo.task}
        </div>
    )
}

export default todo;