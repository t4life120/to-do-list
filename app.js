const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


let items = ["Code with Python", "Web Development"];


app.get('/', (req, res) => {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString('en-US', options);

    res.render('list', {dayNum: today, day: day, items: items})
});


app.post('/', (req, res) => {
    const newToDo = req.body.newToDo

    if (newToDo !== "") {
        items.push(newToDo);
    }

    res.redirect('/');
});








app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
});