const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    const today = new Date();
    const currentDay = today.getDay();
    let day = "";
    

    // Week starts from Sunday (Sunday === 0)
    // if (currentDay === 0) {
    //     day = "Sunday";
    // } else if (currentDay === 1) {
    //     day = "Monday";
    // } else if (currentDay === 2) {
    //     day = "Tuesday";
    // } else if (currentDay === 3) {
    //     day = "Wednesday";
    // } else if (currentDay === 4) {
    //     day = "Thursday";
    // } else if (currentDay === 5) {
    //     day = "Friday";
    // } else {
    //     day = "Saturday";
    // }

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    
        default:
            console.log("Error!");
            break;
    }

    res.render('list', {day: day})
});








app.listen(3000, () => {
    console.log("Server is running on localhost:3000");
});