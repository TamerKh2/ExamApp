import { useEffect, useState } from 'react'
import { getExams, getStudents, getStudentScores } from '../api/examService'

function TeacherDashboard() {
  const [exams, setExams] = useState([])
  const [students, setStudents] = useState([])
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDashboardData() {
      const examsData = await getExams()
      const studentsData = await getStudents()
      const scoresData = await getStudentScores()

      setExams(examsData)
      setStudents(studentsData)
      setScores(scoresData)
      setLoading(false)
    }

    loadDashboardData()
  }, [])

  const activeExams = exams.filter((exam) => exam.status === 'Active').length
  const averageScore = scores.length
    ? Math.round(scores.reduce((sum, item) => sum + item.score, 0) / scores.length)
    : 0

  if (loading) {
    return <div className="alert alert-secondary">Loading teacher dashboard...</div>
  }

  return (
    <section className="mb-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Teacher Dashboard</h1>
        <p className="text-muted">Exam management system using mock data and service functions</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h6 className="text-muted">Total Exams</h6>
              <h2>{exams.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h6 className="text-muted">Active Exams</h6>
              <h2>{activeExams}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h6 className="text-muted">Students</h6>
              <h2>{students.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body">
              <h6 className="text-muted">Average Score</h6>
              <h2>{averageScore}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="mb-3">Available Exams</h3>
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th>Exam ID</th>
                  <th>Title</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam.id}>
                    <td>{exam.id}</td>
                    <td>{exam.title}</td>
                    <td>{exam.subject}</td>
                    <td>{exam.teacher}</td>
                    <td>{exam.durationMinutes} min</td>
                    <td>
                      <span className={`badge ${exam.status === 'Active' ? 'text-bg-success' : 'text-bg-warning'}`}>
                        {exam.status}
                      </span>
                    </td>
                    <td>{exam.questions.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-3">Student Scores</h3>
          <div className="row g-3">
            {students.map((student) => (
              <div className="col-md-4" key={student.id}>
                <div className="border rounded p-3 h-100 bg-light">
                  <h5>{student.name}</h5>
                  <p className="mb-1">Email: {student.email}</p>
                  <p className="mb-1">Completed Exams: {student.completedExams}</p>
                  <p className="mb-0">Average Score: {student.averageScore}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherDashboard
