'use strict';

var express = require('express');
var app = module.exports = express();

app.get('/', function (req, res) {
	res.render('./../app/index.ejs', {});
});
app.listen(7777);
