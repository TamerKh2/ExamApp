import { useEffect, useState } from 'react'
import { mockApiService } from '../api/mockApiService'
import { notifyService } from '../services/notifyService'

function ExamPage({ currentUser }) {
  const [exams, setExams] = useState([])
  const [selectedExamId, setSelectedExamId] = useState('')
  const [exam, setExam] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(null)

  useEffect(() => { mockApiService.getExams().then(setExams) }, [])

  async function startExam() {
    const selectedExam = await mockApiService.getExamById(selectedExamId)
    setExam(selectedExam)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setScore(null)
  }

  function chooseAnswer(answerIndex) {
    setAnswers({ ...answers, [currentQuestionIndex]: answerIndex })
  }

  function nextQuestion() {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  async function finishExam() {
    let correct = 0
    exam.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) correct += 1
    })
    const finalScore = Math.round((correct / exam.questions.length) * 100)
    setScore(finalScore)
    await mockApiService.saveResult({ studentId: currentUser.id, examId: exam.id, score: finalScore })
    notifyService.success(`Exam finished. Score: ${finalScore}`)
  }

  const question = exam?.questions[currentQuestionIndex]

  return (
    <div>
      <h1 className="mb-4">Student Exam Page</h1>
      {!exam && (
        <div className="card shadow-sm"><div className="card-body">
          <label className="form-label">Choose Exam</label>
          <select className="form-select mb-3" value={selectedExamId} onChange={(e) => setSelectedExamId(e.target.value)}>
            <option value="">Select an exam</option>
            {exams.map((exam) => <option key={exam.id} value={exam.id}>{exam.title}</option>)}
          </select>
          <button className="btn btn-success" onClick={startExam} disabled={!selectedExamId}>Start Exam</button>
        </div></div>
      )}

      {exam && score === null && (
        <div className="card shadow-sm"><div className="card-body">
          <h3>{exam.title}</h3>
          <p>Question {currentQuestionIndex + 1} of {exam.questions.length}</p>
          <h5>{question.text}</h5>
          <div className="list-group my-3">
            {question.options.map((option, index) => (
              <button key={index} className={`list-group-item list-group-item-action ${answers[currentQuestionIndex] === index ? 'active' : ''}`} onClick={() => chooseAnswer(index)}>{option}</button>
            ))}
          </div>
          {currentQuestionIndex < exam.questions.length - 1 ? (
            <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
          ) : (
            <button className="btn btn-danger" onClick={finishExam}>Finish</button>
          )}
        </div></div>
      )}

      {score !== null && (
        <div className="alert alert-success">
          <h3>Exam Completed</h3>
          <p>Your score is: {score}</p>
          <button className="btn btn-secondary" onClick={() => setExam(null)}>Back to exams</button>
        </div>
      )}
    </div>
  )
}
export default ExamPage
