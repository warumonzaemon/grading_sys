const express = require('express');
const app = express()
const port = 8003;

const UserRouter = require('./routes/user');
const StudentGradesRouter = require('./routes/studentGrades');
 
const cors = require('cors');
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gradingSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req,res) => {
    res.send("project 6 server is working");
})

app.use('/user', UserRouter);
app.use('/studentGrades', StudentGradesRouter);

app.listen(port, () => { console.log(`Server is running on port ${port}`) ;})