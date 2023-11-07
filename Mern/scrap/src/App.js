import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
    });

    useEffect(() => {
        fetch('/api/students')
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            // Refresh the list of students after successful registration
            fetch('/api/students')
                .then((response) => response.json())
                .then((data) => setStudents(data));

            // Clear the form
            setFormData({
                name: '',
                email: '',
                phone: '',
                event: '',
            });
        });
    };

    return (
        <div className="App">
            <h1>Student Registration Form</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Event:</label>
                <input
                    type="text"
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleSubmit}>Register</button>

            <h2>Registered Students:</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
