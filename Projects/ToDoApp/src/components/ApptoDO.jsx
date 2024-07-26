import { useState } from "react";

function ApptoDO({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButton = () => {
    if (toDoName && dueDate) {
      onNewItem(toDoName, dueDate);
      setToDoName("");
      setDueDate("");
    } else {
      alert("Please enter both the to-do item and due date.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to-do item"
            value={toDoName}
            onChange={handleNameChange}
            aria-label="To-do item"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            aria-label="Due date"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButton}
            aria-label="Add to-do item"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApptoDO;
