// app.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const secretKey = '1234'; // Replace with a strong, unique secret key

app.use(bodyParser.json());

// Sample user data (replace with your user database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to authenticate requests using JWT
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. Token missing.' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Access denied. Invalid token.' });
    req.user = user;
    next();
  });
}

// Endpoint to generate a JWT token when a user logs in
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid username or password.' });

  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Example protected route
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard, ' + req.user.username + '!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});