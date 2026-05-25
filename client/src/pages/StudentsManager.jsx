function StudentsManager() {
  const mockStudents = [
    { id: 101, name: 'Adam Cohen', email: 'student@app.com', class: 'A1' },
    { id: 102, name: 'Maya Levi', email: 'maya@app.com', class: 'A1' },
    { id: 103, name: 'Noam Azulay', email: 'noam@app.com', class: 'B1' },
  ]

  const savedUsers = JSON.parse(localStorage.getItem('examapp_users') || '[]')

  const registeredStudents = savedUsers
    .filter((user) => user.role === 'student')
    .map((user, index) => ({
      id: 200 + index,
      name: user.name,
      email: user.email,
      class: 'Registered Student',
    }))

  const students = [...mockStudents, ...registeredStudents]

  return (
    <div>
      <h1 className="mb-4">Teacher Students Page</h1>

      <table className="table table-bordered table-striped shadow-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={`${student.id}-${student.email}`}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsManager