const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

router.post('/devedores',(request, response) => {
    console.log(request.body);
    response.sendStatus(200);
});

// add router in the Express app.
app.use("/", router);

app.get('/', (req, res) => {
    res.send(`<h1>Lets Scooby Doo this shit!</h1>`);
});

app.listen(3000);
