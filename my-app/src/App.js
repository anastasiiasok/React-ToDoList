import React from "react";
import Form from "./components/Form";
import "./App.css";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="form">
      <Typography variant="h2" className="heading">
        <strong> To Do List</strong>
      </Typography>
      <Form />
    </div>
  );
}

export default App;
