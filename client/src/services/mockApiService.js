const students = [
  {
    id: 101,
    name: 'Adam Cohen',
    email: 'student@app.com',
    class: 'A1',
  },
  {
    id: 102,
    name: 'Maya Levi',
    email: 'maya@app.com',
    class: 'A1',
  },
  {
    id: 103,
    name: 'Noam Azulay',
    email: 'noam@app.com',
    class: 'B1',
  },
]

const exams = [
  {
    id: 1,
    title: 'React Basics Exam',
    duration: 30,
    questions: [
      {
        question: 'What is React?',
        answers: ['Library', 'Database', 'Server'],
        correct: 0,
      },
      {
        question: 'What hook manages state?',
        answers: ['useFetch', 'useState', 'useHtml'],
        correct: 1,
      },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Quiz',
    duration: 20,
    questions: [
      {
        question: 'Which keyword creates a variable?',
        answers: ['let', 'div', 'return'],
        correct: 0,
      },
    ],
  },
]

export function getStudents() {
  return students
}

export function getExams() {
  return exams
}