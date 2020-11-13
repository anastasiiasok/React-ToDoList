import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos = [],
  onDeleteHandler,
  changeStatus,
  onEditSubmitHandler,
}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          // if we use method map, own <li></li> has to have own key
          <TodoItem
            todo={todo}
            onDeleteHandler={onDeleteHandler}
            changeStatus={changeStatus}
            onEditSubmitHandler={onEditSubmitHandler}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
