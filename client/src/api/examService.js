import { exams, students, studentScores } from './mockDb'

function simulateDelay(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300)
  })
}

export async function getExams() {
  return simulateDelay(exams)
}

export async function getStudents() {
  return simulateDelay(students)
}

export async function getStudentScores() {
  return simulateDelay(studentScores)
}

export async function getExamById(id) {
  const exam = exams.find((item) => item.id === Number(id))
  return simulateDelay(exam || null)
}

export async function createExam(newExam) {
  const exam = {
    id: Date.now(),
    status: 'Draft',
    questions: [],
    ...newExam,
  }

  exams.push(exam)
  return simulateDelay(exam)
}
