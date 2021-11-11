const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'game/views'));

app.use(express.static(path.join(__dirname, 'game/public')));
app.set('view engine', 'ejs');


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.render('index');
});

require("./api/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
