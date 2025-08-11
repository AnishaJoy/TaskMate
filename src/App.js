import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import About from "./MyComponents/About";
import { useNavigate } from 'react-router-dom'; // to programmatically navigate to other pages
import { Route, Routes } from 'react-router-dom';
import EditTodo from './MyComponents/EditTodo';

function App() {
  const navigate = useNavigate(); // used to move between routes (pages) from code

  // Load todos from localStorage if they exist, else start with empty list
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // React state to store the list of todos
  const [todos, setTodos] = useState(initTodo);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete a todo
  const onDelete = (todo) => {
    console.log("Deleting todo:", todo);
    // Filter out the todo we want to delete
    setTodos(todos.filter((e) => e !== todo));
  };

  // Function to add a new todo
  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1; // if list is empty, start numbering from 1
    } else {
      sno = todos[todos.length - 1].sno + 1; // increment last sno by 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]); // add new todo to the list
  };

  // Function to edit a todo (navigates to EditTodo page with todo data)
  const editTodo = (todo) => {
    console.log("Editing todo:", todo);
    navigate("/editTodo", { state: { todo } });
  };

  return (
    <>
      {/* App Header */}
      <Header title="TaskMate" />

      {/* Page Routing */}
      <Routes>
        {/* Home page (AddTodo + Todos list) */}
        <Route exact path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} editTodo={editTodo} />
          </>
        } />

        {/* About page */}
        <Route path="/about" element={<About />} />

        <Route path="/editTodo" element={<EditTodo todos={todos} setTodos={setTodos} />} />
      </Routes>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
