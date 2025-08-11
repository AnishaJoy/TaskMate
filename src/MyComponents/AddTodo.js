import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  // State to store title and description of new todo
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!title || !desc) {
      alert("Title or Description cannot be blank!");
    } else {
      addTodo(title, desc); // Call parent function to add todo
      setTitle(""); // Reset form
      setDesc("");
    }
  };

  return (
    <div className="container my-5">
      <div
        className="card border-0 shadow-lg p-4"
        style={{
          borderRadius: "15px",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        }}
      >
        <div className="card-body">
          <h4
            className="card-title fw-bold mb-4"
            style={{ color: "#2b6777", letterSpacing: "0.5px" }}
          >
            ➕ Add a New To-do
          </h4>

          {/* Form for adding new todo */}
          <form onSubmit={submit}>
            {/* Title Field */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold" style={{ fontSize: "0.95rem", color: "#444" }}>
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Update state on change
                className="form-control"
                id="title"
                placeholder="Enter todo title"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>

            {/* Description Field */}
            <div className="mb-3">
              <label htmlFor="desc" className="form-label fw-semibold" style={{ fontSize: "0.95rem", color: "#444" }}>
                Description
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                id="desc"
                placeholder="Enter description"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="text-end">
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#52ab98",
                  color: "#fff",
                  padding: "10px 25px",
                  borderRadius: "25px",
                  border: "none",
                  transition: "0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background = "#3d8b7c")
                }
                onMouseOut={(e) =>
                  (e.target.style.background = "#52ab98")
                }
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
