import './App.css'

function App() {
    const teachers = [
        { name: 'John Smith', subject: 'Math', students: 32 },
        { name: 'Sarah Cohen', subject: 'English', students: 28 },
        { name: 'David Levi', subject: 'Computer Science', students: 35 }
    ]

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Teacher Dashboard</h1>

            <div className="row">
                {teachers.map((teacher, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h4 className="card-title">{teacher.name}</h4>
                                <p className="card-text">Subject: {teacher.subject}</p>
                                <p className="card-text">Students: {teacher.students}</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App