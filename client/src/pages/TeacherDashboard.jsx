import { useEffect, useState } from 'react'
import { mockApiService } from '../api/mockApiService'

function TeacherDashboard() {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [exams, setExams] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    async function loadData() {
      setTeachers(await mockApiService.getTeachers())
      setStudents(await mockApiService.getStudents())
      setExams(await mockApiService.getExams())
      setResults(await mockApiService.getResults())
    }
    loadData()
  }, [])

  return (
    <div>
      <h1 className="text-center mb-4">Teacher Dashboard</h1>
      <div className="row mb-4">
        <div className="col-md-3 mb-3"><div className="card stat-card"><div className="card-body text-center"><h5>Teachers</h5><h2>{teachers.length}</h2></div></div></div>
        <div className="col-md-3 mb-3"><div className="card stat-card"><div className="card-body text-center"><h5>Students</h5><h2>{students.length}</h2></div></div></div>
        <div className="col-md-3 mb-3"><div className="card stat-card"><div className="card-body text-center"><h5>Exams</h5><h2>{exams.length}</h2></div></div></div>
        <div className="col-md-3 mb-3"><div className="card stat-card"><div className="card-body text-center"><h5>Results</h5><h2>{results.length}</h2></div></div></div>
      </div>
      <h3>Latest Results</h3>
      <table className="table table-bordered bg-white shadow-sm">
        <thead><tr><th>Student ID</th><th>Exam ID</th><th>Score</th></tr></thead>
        <tbody>{results.map((r) => <tr key={r.id}><td>{r.studentId}</td><td>{r.examId}</td><td>{r.score}</td></tr>)}</tbody>
      </table>
    </div>
  )
}

export default TeacherDashboard
