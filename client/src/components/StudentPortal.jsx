import { useState } from 'react'
import { getExamById } from '../api/examService'

function StudentPortal() {
  const [studentName, setStudentName] = useState('')
  const [examId, setExamId] = useState('101')
  const [selectedExam, setSelectedExam] = useState(null)
  const [message, setMessage] = useState('')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  async function startExam(event) {
    event.preventDefault()
    setMessage('')
    setSelectedExam(null)
    setCurrentQuestionIndex(0)

    if (!studentName.trim()) {
      setMessage('Please enter student name before starting the exam.')
      return
    }

    const exam = await getExamById(examId)

    if (!exam) {
      setMessage('Exam was not found. Try exam ID 101, 102, or 103.')
      return
    }

    setSelectedExam(exam)
  }

  function nextQuestion() {
    if (!selectedExam) return

    setCurrentQuestionIndex((current) =>
      current + 1 < selectedExam.questions.length ? current + 1 : current,
    )
  }

  function previousQuestion() {
    setCurrentQuestionIndex((current) => (current > 0 ? current - 1 : current))
  }

  const currentQuestion = selectedExam?.questions[currentQuestionIndex]

  return (
    <section className="card shadow-sm mb-5">
      <div className="card-body">
        <h2 className="mb-3">Student Portal</h2>
        <p className="text-muted">Enter your details, choose an exam ID, and start the exam.</p>

        <form className="row g-3 mb-4" onSubmit={startExam}>
          <div className="col-md-5">
            <label className="form-label">Student Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Example: Tamer Khatib"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Exam ID</label>
            <input
              className="form-control"
              type="number"
              value={examId}
              onChange={(event) => setExamId(event.target.value)}
            />
            <div className="form-text">Try: 101, 102, or 103</div>
          </div>

          <div className="col-md-3 d-flex align-items-end">
            <button className="btn btn-success w-100" type="submit">
              Start
            </button>
          </div>
        </form>

        {message && <div className="alert alert-danger">{message}</div>}

        {selectedExam && currentQuestion && (
          <div className="alert alert-info mb-0">
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <div>
                <h4>{selectedExam.title}</h4>
                <p className="mb-1">Student: {studentName}</p>
                <p className="mb-1">Subject: {selectedExam.subject}</p>
              </div>
              <div className="text-md-end">
                <span className="badge text-bg-primary">
                  Question {currentQuestionIndex + 1} of {selectedExam.questions.length}
                </span>
              </div>
            </div>

            <hr />

            <h5>{currentQuestion.text}</h5>
            <div className="list-group mb-3">
              {currentQuestion.options.map((option) => (
                <button className="list-group-item list-group-item-action" type="button" key={option}>
                  {option}
                </button>
              ))}
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary" type="button" onClick={previousQuestion}>
                Previous
              </button>
              <button className="btn btn-primary" type="button" onClick={nextQuestion}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default StudentPortal
