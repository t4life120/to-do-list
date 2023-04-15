import express from 'express';
import bodyParser from 'body-parser';
import date from './date.js';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Array can also be const, method .push() still works
let items = ["Code with Python", "Web Development"];
let workItems = [];


app.get('/', (req, res) => {
    // const day = date(); --> if only one export
    // const day = date.getDay();
    const day = date.getDate();

    res.render('list', {listTitle: day, listItems: items})
});


app.post('/', (req, res) => {
    const newToDo = req.body.newToDo;

    if (newToDo !== "") {
        console.log(req.body);

        if (req.body.list === "Work") {
            workItems.push(newToDo);
            res.redirect('/work');
        } else {
            items.push(newToDo);
            res.redirect('/');
        }
    }
});



app.get('/work', (req, res) => {
    res.render('list', {listTitle: "Work List", listItems: workItems});
});


app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
});