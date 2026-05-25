export const users = [
  { id: 1, name: 'Teacher Admin', email: 'teacher@app.com', password: '123456', role: 'teacher' },
  { id: 2, name: 'Adam Cohen', email: 'student@app.com', password: '123456', role: 'student' },
]

export const teachers = [
  { id: 1, name: 'Teacher Admin', subject: 'Computer Science', email: 'teacher@app.com' },
]

export const students = [
  { id: 101, name: 'Adam Cohen', email: 'student@app.com', className: 'A1' },
  { id: 102, name: 'Maya Levi', email: 'maya@app.com', className: 'A1' },
  { id: 103, name: 'Noam Azulay', email: 'noam@app.com', className: 'B1' },
]

export const exams = [
  {
    id: 1,
    title: 'React Basics Exam',
    subject: 'React',
    duration: 30,
    questions: [
      { id: 1, text: 'What is JSX?', options: ['A database', 'JavaScript XML syntax', 'A CSS library', 'A server'], correctAnswer: 1 },
      { id: 2, text: 'Which hook is used for state?', options: ['useState', 'useClass', 'useRouter', 'useServer'], correctAnswer: 0 },
      { id: 3, text: 'React components return what?', options: ['SQL', 'HTML/JSX', 'JSON only', 'CSS only'], correctAnswer: 1 },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Quiz',
    subject: 'JavaScript',
    duration: 20,
    questions: [
      { id: 1, text: 'Which keyword declares a constant?', options: ['var', 'let', 'const', 'static'], correctAnswer: 2 },
      { id: 2, text: 'Which method converts JSON text to object?', options: ['JSON.parse', 'JSON.stringify', 'Object.map', 'Array.from'], correctAnswer: 0 },
    ],
  },
]

export const results = [
  { id: 1, studentId: 101, examId: 1, score: 88 },
  { id: 2, studentId: 102, examId: 1, score: 94 },
  { id: 3, studentId: 103, examId: 2, score: 76 },
]
