const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from SoundBite backend!');
});

const PORT = process.env.PORT || 5001; // Change the port here
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
