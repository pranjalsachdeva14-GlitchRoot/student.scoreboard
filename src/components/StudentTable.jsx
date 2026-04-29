import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              index={index + 1}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
