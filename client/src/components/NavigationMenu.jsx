function NavigationMenu({ currentUser, currentPage, setCurrentPage, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 rounded">
      <div className="container-fluid">
        <span className="navbar-brand">ExamApp</span>
        <div className="navbar-nav me-auto">
          {!currentUser && (
            <>
              <button className={`nav-link btn btn-link ${currentPage === 'login' ? 'active' : ''}`} onClick={() => setCurrentPage('login')}>Login</button>
              <button className={`nav-link btn btn-link ${currentPage === 'register' ? 'active' : ''}`} onClick={() => setCurrentPage('register')}>Register</button>
            </>
          )}
          {currentUser?.role === 'teacher' && (
            <>
              <button className={`nav-link btn btn-link ${currentPage === 'teacher' ? 'active' : ''}`} onClick={() => setCurrentPage('teacher')}>Teacher Dashboard</button>
              <button className={`nav-link btn btn-link ${currentPage === 'exams' ? 'active' : ''}`} onClick={() => setCurrentPage('exams')}>Exams</button>
              <button className={`nav-link btn btn-link ${currentPage === 'students' ? 'active' : ''}`} onClick={() => setCurrentPage('students')}>Students</button>
            </>
          )}
          {currentUser?.role === 'student' && (
            <>
              <button className={`nav-link btn btn-link ${currentPage === 'student' ? 'active' : ''}`} onClick={() => setCurrentPage('student')}>Student Dashboard</button>
              <button className={`nav-link btn btn-link ${currentPage === 'exam' ? 'active' : ''}`} onClick={() => setCurrentPage('exam')}>Take Exam</button>
            </>
          )}
        </div>
        {currentUser && (
          <div className="d-flex align-items-center gap-2 text-white">
            <span>{currentUser.name} ({currentUser.role})</span>
            <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavigationMenu
