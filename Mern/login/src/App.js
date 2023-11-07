import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    if (username === '') {
      validationErrors.username = 'Please enter a username';
    }
    if (email === '') {
      validationErrors.email = 'Please enter an email';
    } else {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        validationErrors.email = 'Please enter a valid email';
      }
    }
    if (password === '') {
      validationErrors.password = 'Please enter a password';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Update the errors state
    setErrors(validationErrors);

    // Submit the form if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission or further processing
      console.log('Form submitted');
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;