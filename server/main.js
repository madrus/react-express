//jshint -W117

var express = require('express');
var parser = require('body-parser');
require('./database.js'); // no need to assign this to a var
var app = express();

app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
});

app.use(express.static(__dirname + '/../.tmp'));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}));

app.listen(7777);

// require the grocery items api and return the items
require('./routes/items.js')(app);
