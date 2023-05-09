
var express = require('express');
var path = require('path');

var database = require('../database');
 const port = 3000;

var app = express();


const publicPath = path.join(__dirname, "../public")
app.use(express.static(publicPath));


const viewsPath = path.join(__dirname, "../views");
app.set("views", viewsPath)

// app.set('src', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Server is running on 
  http://localhost:3000`)
})

var indexRouter = require('../routes/index');
app.use('/', indexRouter);

var blessingdataRouter = require('../routes/blessing_data');
app.use('/blessing_data', blessingdataRouter);


var blessingdetailsRouter = require('../routes/blessing_details');
app.use('/blessing_details', blessingdetailsRouter);











module.exports = app;
