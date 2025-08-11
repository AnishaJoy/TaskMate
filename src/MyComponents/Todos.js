import React from "react";
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container" style={myStyle}>
      <div
        className="p-4 rounded shadow-lg"
        style={{
          background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
          borderRadius: "15px",
        }}
      >
        <h3
          className="mb-4 border-bottom pb-2"
          style={{
            color: "#2b6777",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Your Todo List
        </h3>

        {/* Show message if no todos, else show list */}
        {props.todos.length === 0 ? (
          <p className="text-muted fs-5">
            You have no todos. Start by adding one! 
          </p>
        ) : (
          props.todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.sno} // Unique key for React rendering
              onDelete={props.onDelete}
              editTodo={props.editTodo} // Pass edit function
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
