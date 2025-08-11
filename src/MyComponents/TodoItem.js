const TodoItem = ({ todo, onDelete, editTodo }) => {
  return (
    <div
      className="card mb-3 shadow-sm border-0"
      style={{
        borderRadius: "12px",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          {/* Todo Title & Description */}
          <div>
            <h5 className="card-title text-dark fw-bold mb-1">
              {todo.title}
            </h5>
            <p className="card-text text-secondary mb-2">{todo.desc}</p>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column gap-2">
            {/* Delete Button */}
            <button
              className="btn btn-sm"
              style={{
                background: "#dc3545",
                color: "#fff",
                borderRadius: "20px",
                padding: "5px 12px",
              }}
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>

            {/* Edit Button */}
            <button
              className="btn btn-sm"
              style={{
                background: "#52ab98",
                color: "#fff",
                borderRadius: "20px",
                padding: "5px 12px",
              }}
              onClick={() => editTodo(todo)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
