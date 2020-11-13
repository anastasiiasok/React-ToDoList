import React, { useState } from "react";

import { Input, Button, Checkbox } from "@material-ui/core";

function TodoItem({
  todo,
  onDeleteHandler,
  changeStatus,
  onEditSubmitHandler,
}) {
  const [editInput, setEditInput] = useState("");
  const [isHidden, setHidden] = useState(false);

  const onEditHandler = () => {
    setEditInput(todo.name);
    setHidden(true);
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    setEditInput(event.target.value);
  };

  return (
    <div>
      <li className={todo.status ? "done" : ""}>
        <Checkbox
          onClick={() => changeStatus(todo.id)}
          type="checkbox"
        ></Checkbox>
        {todo.name}
      </li>
      <Button
        color="secondary"
        type="button"
        onClick={() => onDeleteHandler(todo.id)}
      >
        Delete
      </Button>
      <Button type="button" onClick={() => onEditHandler(todo.id)}>
        Edit
      </Button>
      {isHidden && (
        <form
          onSubmit={(event) => {
            onEditSubmitHandler(event, todo.id, editInput);
            setHidden(false);
          }}
        >
          <Input
            type="text"
            placeholder="Edit todo here"
            value={editInput}
            onChange={onChangeHandler}
            required
          ></Input>
          <Button type="submit" color="primary">
            Save
          </Button>
        </form>
      )}
    </div>
  );
}

export default TodoItem;
