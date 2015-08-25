//jshint -W117:W104

var express = require('express');
var parser = require('body-parser');
var app = express();
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');

require('./database.js'); // no need to assign this to a var
require('babel/register'); // om jsx te vertalen naar js

app.get('/', function (req, res) {
//    res.render('./../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(error, doc) {
        // anything we pass as an argument to our application variable will be added as a prop
        var generated = React.renderToString(application({
            items: doc
        }));

        res.render('./../app/index.ejs', {reactOutput: generated});
    });
});

app.use(express.static(__dirname + '/../.tmp'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}));

app.listen(7777);

// require the grocery items api and return the items
require('./routes/items.js')(app);
