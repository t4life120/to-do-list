import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


let items = ["Code with Python", "Web Development"];
let workItems = [];


app.get('/', (req, res) => {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    const day = today.toLocaleDateString('en-US', options);

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