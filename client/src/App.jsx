import './App.css'
import TeacherDashboard from './components/TeacherDashboard'
import StudentPortal from './components/StudentPortal'

function App() {
  return (
    <main className="container py-5">
      <TeacherDashboard />
      <StudentPortal />
    </main>
  )
}

export default App
