const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');


let toDos = ["Code with Python", "Web Development"];


app.get('/', (req, res) => {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString('en-US', options);

    res.render('list', {dayNum: today, day: day, toDos: toDos})
});


app.post('/', (req, res) => {
    const newToDo = req.body.toDo

    if (newToDo !== "") {
        toDos.push(newToDo);
    }

    res.redirect('/');
});








app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
});