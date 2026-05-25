import { users, teachers, students, exams, results } from '../data/mockDb'
import { loggerService } from '../services/loggerService'

const delay = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 200))

export const mockApiService = {
  login(email, password) {
    loggerService.info(`login attempt: ${email}`)
    const user = users.find((u) => u.email === email && u.password === password)
    return delay(user || null)
  },

  register(newUser) {
    const user = { id: users.length + 1, role: 'student', ...newUser }
    users.push(user)
    loggerService.info(`registered user: ${user.email}`)
    return delay(user)
  },

  getTeachers() {
    return delay([...teachers])
  },

  getStudents() {
    return delay([...students])
  },

  getExams() {
    return delay([...exams])
  },

  getExamById(id) {
    return delay(exams.find((exam) => exam.id === Number(id)))
  },

  getResults() {
    return delay([...results])
  },

  saveResult(result) {
    const newResult = { id: results.length + 1, ...result }
    results.push(newResult)
    return delay(newResult)
  },
}
