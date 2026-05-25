import { useState } from 'react'
import { mockApiService } from '../api/mockApiService'

function RegisterPage({ onLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const user = await mockApiService.register({ name, email, password })
    onLogin(user)
  }

  return (
    <div className="card shadow-sm auth-card mx-auto">
      <div className="card-body">
        <h2 className="mb-3">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} required />
          <label className="form-label">Email</label>
          <input className="form-control mb-3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label className="form-label">Password</label>
          <input className="form-control mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
