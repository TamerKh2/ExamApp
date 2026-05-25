import { useState } from 'react'
import './App.css'
import NavigationMenu from './components/NavigationMenu'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TeacherDashboard from './pages/TeacherDashboard'
import ExamsManager from './pages/ExamsManager'
import StudentsManager from './pages/StudentsManager'
import StudentDashboard from './pages/StudentDashboard'
import ExamPage from './pages/ExamPage'
import { configService } from './services/configService'
import { storageService } from './services/storageService'

function App() {
  const [currentUser, setCurrentUser] = useState(storageService.load(configService.storageKeys.currentUser))
  const [currentPage, setCurrentPage] = useState(currentUser?.role === 'teacher' ? 'teacher' : currentUser?.role === 'student' ? 'student' : 'login')

  function handleLogin(user) {
    setCurrentUser(user)
    storageService.save(configService.storageKeys.currentUser, user)
    setCurrentPage(user.role === 'teacher' ? 'teacher' : 'student')
  }

  function handleLogout() {
    storageService.remove(configService.storageKeys.currentUser)
    setCurrentUser(null)
    setCurrentPage('login')
  }

  function renderPage() {
    if (!currentUser && currentPage === 'register') return <RegisterPage onLogin={handleLogin} />
    if (!currentUser) return <LoginPage onLogin={handleLogin} />
    if (currentUser.role === 'teacher' && currentPage === 'exams') return <ExamsManager />
    if (currentUser.role === 'teacher' && currentPage === 'students') return <StudentsManager />
    if (currentUser.role === 'teacher') return <TeacherDashboard />
    if (currentUser.role === 'student' && currentPage === 'exam') return <ExamPage currentUser={currentUser} />
    return <StudentDashboard currentUser={currentUser} />
  }

  return (
    <div className="container py-4">
      <NavigationMenu currentUser={currentUser} currentPage={currentPage} setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      {renderPage()}
    </div>
  )
}

export default App
