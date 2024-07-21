const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Require the path module

const app = express();
const port = 3050;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  // Send the 'index.html' file from the 'public' directory
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the login form
app.get('/login', (req, res) => {
  // Send the 'login.html' file from the 'public' directory
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Login endpoint (dummy authentication for example)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Validate username and password (you should use bcrypt or another secure method)
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid credentials');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
