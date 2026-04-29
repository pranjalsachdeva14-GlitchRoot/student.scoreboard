import { useState } from "react";

function StudentRow({ student, index, updateScore }) {
  const [newScore, setNewScore] = useState("");

  const isPass = student.score >= 40;

  function handleUpdate() {
    if (newScore === "") return;
    updateScore(student.id, newScore);
    setNewScore("");
  }

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={isPass ? "pass" : "fail"}>
          {isPass ? "Pass" : "Fail"}
        </span>
      </td>
      <td>
        <input
          type="number"
          placeholder="New score"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </td>
    </tr>
  );
}

export default StudentRow;
