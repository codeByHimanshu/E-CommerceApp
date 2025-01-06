const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();

app.get( '/', (req, res) => {
  res.send('Hello World');
  const {name ,email, password} = req.body;
});

app.post('/', (req,res) => {
res.send('hello world')
})
app.post('/', (req,res) => {
res.send('hello world')
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});