const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

require('./checkPrerequisities');

const setupProxy = require('../src/setupProxy');

const PORT = process.env.PORT || 3001;

const app = express();

setupProxy(app);

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
