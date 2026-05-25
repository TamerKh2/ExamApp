import { useState } from 'react'
import { mockApiService } from '../api/mockApiService'
import { notifyService } from '../services/notifyService'

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('teacher@app.com')
  const [password, setPassword] = useState('123456')

  async function handleSubmit(e) {
    e.preventDefault()
    const user = await mockApiService.login(email, password)
    if (!user) {
      notifyService.error('Invalid email or password')
      return
    }
    onLogin(user)
  }

  return (
    <div className="card shadow-sm auth-card mx-auto">
      <div className="card-body">
        <h2 className="mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Email</label>
          <input className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="form-label">Password</label>
          <input className="form-control mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <div className="alert alert-secondary mt-3 small">
          Teacher: teacher@app.com / 123456<br />Student: student@app.com / 123456
        </div>
      </div>
    </div>
  )
}

export default LoginPage
