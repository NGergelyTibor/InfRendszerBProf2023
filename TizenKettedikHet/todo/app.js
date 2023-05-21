// app.js
const express = require('express');
const cors = require('cors'); // Add this line
const sequelize = require('./models/config/database'); // Assuming your Sequelize configuration file is in the same directory
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json());
app.use(cors()); // Add this line

app.use('/todos', todoRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to synchronize database:', error);
  });

const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
