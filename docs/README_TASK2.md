# ExamApp - Task 2 Documentation

## Project Goal
A full React application without a server. The app uses mock data, service layers, pages, components, authentication flow, teacher pages, student pages, navigation, and documentation diagrams.

## Main Entities Used by Mock DB / Views
- User: id, name, email, password, role
- Teacher: id, name, subject, email
- Student: id, name, email, className
- Exam: id, title, subject, duration, questions
- Question: id, text, options, correctAnswer
- Result: id, studentId, examId, score

## Components Hierarchy
```mermaid
graph TD
  App[App]
  Nav[NavigationMenu]
  Login[LoginPage]
  Register[RegisterPage]
  Teacher[TeacherDashboard]
  Exams[ExamsManager]
  Students[StudentsManager]
  Student[StudentDashboard]
  Exam[ExamPage]

  App --> Nav
  App --> Login
  App --> Register
  App --> Teacher
  App --> Exams
  App --> Students
  App --> Student
  App --> Exam
```

## UML for Main Code
```mermaid
classDiagram
  class App {
    currentUser
    currentPage
    handleLogin()
    handleLogout()
    renderPage()
  }

  class mockApiService {
    login(email,password)
    register(newUser)
    getTeachers()
    getStudents()
    getExams()
    getExamById(id)
    getResults()
    saveResult(result)
  }

  class configService {
    appName
    version
    storageKeys
  }

  class storageService {
    save(key,value)
    load(key)
    remove(key)
  }

  class loggerService {
    info(message)
    error(message)
  }

  class notifyService {
    success(message)
    error(message)
  }

  App --> mockApiService
  App --> configService
  App --> storageService
  mockApiService --> loggerService
  ExamPage --> notifyService
```

## Use Case Diagram
```mermaid
graph LR
  Teacher((Teacher))
  Student((Student))

  Teacher --> Login[Login]
  Teacher --> ViewTeacherDashboard[View teacher dashboard]
  Teacher --> ManageExams[View exams]
  Teacher --> ManageStudents[View students]
  Teacher --> ViewResults[View results]

  Student --> Login
  Student --> Register[Register]
  Student --> ViewStudentDashboard[View student dashboard]
  Student --> ChooseExam[Choose exam]
  Student --> StartExam[Start exam]
  Student --> AnswerQuestions[Answer questions]
  Student --> NextQuestion[Move to next question]
  Student --> FinishExam[Finish exam]
  Student --> ViewScore[View score]
```

## Services
- mockApiService: simulates API calls using mock DB data.
- configService: stores app settings and storage keys.
- loggerService: logs app actions.
- storageService: saves and loads the current user from localStorage.
- notifyService: displays messages to users.

## Use Cases
### Teacher
- Login as teacher.
- View teacher dashboard statistics.
- View all exams.
- View all students.
- View latest results.

### Student
- Login or register.
- View available exams.
- Start an exam.
- Answer questions.
- Move between questions using Next.
- Finish the exam and receive a score.

## Test Users
- Teacher: teacher@app.com / 123456
- Student: student@app.com / 123456
