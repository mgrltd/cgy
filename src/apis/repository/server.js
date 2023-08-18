const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./UserRepository'); // You'll create this module

const app = express();
app.use(bodyParser.json());

// API for creating user data
app.post('/api/users', userService.saveUserData);

// API for updating user data by ID
app.put('/api/users/:id', userService.updateUser);

// API for retrieving user data by ID
app.get('/api/users/:id', userService.getUserById);

// API for deleting user data by ID
app.delete('/api/users/:id', userService.deleteUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
