import React from "react";
import Todo from "./Todo";

function TodoList(props) {
    return (
        <div>
            {props.TodoListdata.map((todo, index) => {
                return <todo todo = {todo} key={index} />;
            })};
        </div>
    );
};

export default TodoList;