import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || score === "") return;
    addStudent(name, score);
    // Clear form after adding
    setName("");
    setScore("");
  }

  return (
    <div className="form-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
