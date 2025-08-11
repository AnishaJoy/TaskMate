import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './EditTodo.css'; // Importing styles for this component

const EditTodo = ({ todos, setTodos }) => {

    // useLocation lets us access data passed via navigation (in this case, the todo to edit)
    const { state } = useLocation();
    const navigate = useNavigate();
    const todo = state?.todo; // Access the todo object, or undefined if not provided

    // Local state for the form fields
    const [title, setTitle] = useState(todo?.title || "");
    const [desc, setDesc] = useState(todo?.desc || "");

    // Handlers for updating local state as the user types
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescChange = (e) => setDesc(e.target.value);

    // Function to save the edited todo
    const handleSave = () => {
        const editedTodo = { ...todo, title, desc }; // make updated todo object
        const updatedTodos = todos.map(t =>
            t.sno === editedTodo.sno ? editedTodo : t
        );
        setTodos(updatedTodos); // update App.js state
        navigate("/"); // go back to home
    };


    // If no todo is provided, show a message
    if (!todo) {
        return <div className="no-todo">No todo selected to edit.</div>;
    }

    return (
        <div className="edit-todo-container">
            <h2 className="edit-title"> Edit Todo</h2>
            <div className="edit-card">
                {/* Title input */}
                <div className="edit-form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="edit-input"
                        placeholder="Enter title"
                    />
                </div>

                {/* Description textarea */}
                <div className="edit-form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea
                        id="desc"
                        value={desc}
                        onChange={handleDescChange}
                        className="edit-textarea"
                        rows="5"
                        placeholder="Enter description"
                    ></textarea>
                </div>

                {/* Save and Back buttons */}
                <div className="edit-btn-group">
                    <button className="edit-btn primary" onClick={handleSave}>Save</button>
                    <Link className="edit-btn secondary" to="/"> Back</Link>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;
