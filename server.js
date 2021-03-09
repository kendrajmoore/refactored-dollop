// Initialize express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config()

const bodyParser = require('body-parser');
// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

//logger
const morgan = require("morgan");
//require path
const path = require('path');
const cookieParser = require("cookie-parser");
//delete, edit
const methodOverride = require("method-override");
const cors = require("cors");

const models = require('./db/models');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');


// The following line must appear AFTER const app = express() and before your routes!
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors());
// static files middleware
app.use('/public', express.static(path.join(__dirname, 'public')))

require('./controllers/maps')(app, models);
require('./controllers/subs')(app, models);
//add comment

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
  res.render('about');
})

//404 page
app.get("*", (req, res) => {
  res.render("error");
});


// Choose a port to listen on


// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})