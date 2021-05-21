
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config();



const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const path = require('path');
const VIEWS_PATH = path.join(__dirname,'/views')
const mustacheExpress = require('mustache-express');

const models = require('./db/models');

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('view engine', 'mustache');

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/css',express.static('css'))
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));
require('./controllers/maps')(app, models);
require('./controllers/subs')(app, models);

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/success', (req, res) => {
  res.render('success');
})

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log('App listening on port 3000!')
})