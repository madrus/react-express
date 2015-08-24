var mongoose = require('mongoose');

// the url here is arbitrary, if it does not exist mongodb will create it
mongoose.connect('mongodb://localhost/grocery', function () {
    console.log('connected to mongodb');
});
