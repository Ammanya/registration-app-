const express = require('express');
const bodyParser = require('body-parser');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', registrationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});