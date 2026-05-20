export const exams = [
  {
    id: 101,
    title: 'JavaScript Basics Exam',
    subject: 'Web Development',
    teacher: 'John Smith',
    durationMinutes: 45,
    status: 'Active',
    questions: [
      {
        id: 1,
        text: 'Which keyword is used to declare a constant in JavaScript?',
        options: ['var', 'let', 'const', 'define'],
        correctAnswer: 'const',
      },
      {
        id: 2,
        text: 'What does React use to describe the UI?',
        options: ['Components', 'Tables', 'SQL queries', 'Folders'],
        correctAnswer: 'Components',
      },
      {
        id: 3,
        text: 'Which command starts a Vite development server?',
        options: ['npm run dev', 'npm build', 'git start', 'node vite'],
        correctAnswer: 'npm run dev',
      },
    ],
  },
  {
    id: 102,
    title: 'React Components Quiz',
    subject: 'React',
    teacher: 'Sarah Cohen',
    durationMinutes: 30,
    status: 'Draft',
    questions: [
      {
        id: 1,
        text: 'What is the file extension commonly used for React components?',
        options: ['.jsx', '.sql', '.txt', '.exe'],
        correctAnswer: '.jsx',
      },
      {
        id: 2,
        text: 'Which hook is used to manage component state?',
        options: ['useState', 'useRouter', 'useClass', 'useFile'],
        correctAnswer: 'useState',
      },
    ],
  },
  {
    id: 103,
    title: 'Bootstrap Layout Test',
    subject: 'CSS Frameworks',
    teacher: 'David Levi',
    durationMinutes: 25,
    status: 'Active',
    questions: [
      {
        id: 1,
        text: 'Which Bootstrap class creates a card?',
        options: ['card', 'box', 'panel', 'frame'],
        correctAnswer: 'card',
      },
      {
        id: 2,
        text: 'Which Bootstrap class creates a primary button?',
        options: ['btn btn-primary', 'button-primary', 'primary-btn', 'btn-blue'],
        correctAnswer: 'btn btn-primary',
      },
    ],
  },
]

export const students = [
  {
    id: 1,
    name: 'Adam Cohen',
    email: 'adam@example.com',
    completedExams: 2,
    averageScore: 88,
  },
  {
    id: 2,
    name: 'Maya Levi',
    email: 'maya@example.com',
    completedExams: 3,
    averageScore: 94,
  },
  {
    id: 3,
    name: 'Noam Azulay',
    email: 'noam@example.com',
    completedExams: 1,
    averageScore: 76,
  },
]

export const studentScores = [
  { studentId: 1, examId: 101, score: 91 },
  { studentId: 1, examId: 102, score: 85 },
  { studentId: 2, examId: 101, score: 96 },
  { studentId: 2, examId: 102, score: 92 },
  { studentId: 2, examId: 103, score: 94 },
  { studentId: 3, examId: 101, score: 76 },
]
