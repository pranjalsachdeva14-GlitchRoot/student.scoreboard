import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", score: 75 },
    { id: 2, name: "Priya Singh", score: 35 },
    { id: 3, name: "Amit Kumar", score: 55 },
  ]);

  // Update score of a student
  function updateScore(id, newScore) {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, score: Number(newScore) } : student
      )
    );
  }

  // Add a new student
  function addStudent(name, score) {
    const newStudent = {
      id: students.length + 1,
      name: name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  }

  return (
    <div className="app">
      <Header />
      <StudentTable students={students} updateScore={updateScore} />
      <AddStudentForm addStudent={addStudent} />
    </div>
  );
}

export default App;
