const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paperRoutes = require('./routes/paperRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', paperRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


