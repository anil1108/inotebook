// importing required modules 
const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 3000

// creating middleware
app.use(express.json());

// fetching api from routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// default path to show
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})

