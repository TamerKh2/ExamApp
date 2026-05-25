import { useEffect, useState } from 'react'
import { mockApiService } from '../api/mockApiService'

function StudentDashboard({ currentUser }) {
  const [exams, setExams] = useState([])
  useEffect(() => { mockApiService.getExams().then(setExams) }, [])
  return (
    <div>
      <h1 className="mb-4">Student Dashboard</h1>
      <div className="alert alert-primary">Welcome {currentUser.name}. Choose an exam from the Take Exam page.</div>
      <h3>Available Exams</h3>
      <ul className="list-group">{exams.map((exam) => <li className="list-group-item" key={exam.id}>{exam.title} - {exam.duration} minutes</li>)}</ul>
    </div>
  )
}
export default StudentDashboard
