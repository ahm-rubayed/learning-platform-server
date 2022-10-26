const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send("Course API is running")
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.filter(n => n.courses_id == id);
    console.log(course)
    res.send(course)
})

app.listen(port, () => {
    console.log("Courseella server is running")
})