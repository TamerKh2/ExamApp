import { useEffect, useState } from 'react'
import { mockApiService } from '../api/mockApiService'

function ExamsManager() {
  const [exams, setExams] = useState([])
  useEffect(() => { mockApiService.getExams().then(setExams) }, [])
  return (
    <div>
      <h2 className="mb-3">Teacher Exams Page</h2>
      <div className="row">
        {exams.map((exam) => (
          <div className="col-md-6 mb-3" key={exam.id}>
            <div className="card shadow-sm"><div className="card-body">
              <h4>{exam.title}</h4>
              <p>Subject: {exam.subject}</p>
              <p>Duration: {exam.duration} minutes</p>
              <p>Questions: {exam.questions.length}</p>
            </div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ExamsManager
