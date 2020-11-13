import React from "react"; // import out react , so that we can run our jsx elements
import { useState } from "react"; // import hook function
import TodoList from "./TodoList"; // import TodoList function from component
import { Input, Button } from "@material-ui/core"; //material ui

//our main component that we will render in app.js
function Form() {
  const [input, setInput] = useState(""); // hook setInput function
  const [todos, setTodos] = useState([]); // hook setTodos function

  // ????????????

  const onChangeHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  // in this function we have setTodos(so ,that our filled input will have it's own name, status and id)
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //this hook now have own name, status and id
    setTodos([
      ...todos,
      { name: input, status: false, id: Math.floor(Math.random() * 1000) },
    ]);
    setInput(""); // input will be "clean"
    console.log(todos);
  };

  // this part delete our todo item
  const onDeleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // this part
  const changeStatus = (id) => {
    const checkTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(checkTodos);
  };

  //this part allows to edit todo
  const onEditSubmitHandler = (event, id, value) => {
    event.preventDefault();

    const editTodos = todos.map((el) => {
      //(el) returns all aray[{...,....,...}]
      if (el.id === id) {
        el.name = value;
      }
      return el;
    });
    setTodos(editTodos);
  };
  console.log("todos", todos);
  //this log will show todos person filled in input
  // [{…}, {…}]
  // 0:
  // id: 753
  // name: "clean my dog"
  // status: true

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Add todo here"
          value={input}
          onChange={onChangeHandler}
          required
        ></Input>
        <Button type="submit" color="primary">
          <strong>Add</strong>
        </Button>
      </form>
      <strong className="font">
        <TodoList
          todos={todos}
          onDeleteHandler={onDeleteHandler}
          changeStatus={changeStatus}
          onEditSubmitHandler={onEditSubmitHandler}
        />
      </strong>
    </div>
  );
}

export default Form;
