var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

// the url here is arbitrary, if it does not exist mongodb will create it
mongoose.connect('mongodb://localhost/grocery', function () {
    console.log('connected to mongodb');

    /* here we have to drop the database every time
     * because otherwise the same items are added to the list
     * time and time again.
     * This is only necessary during the development fase.
     * Actually, the dropping and seeding can be done in a separate function
     */
    mongoose.connection.db.dropDatabase();

    var items = [{
        name: 'Ice Cream'
    }, {
        name: 'Waffles'
    }, {
        name: 'Candy',
        purchased: true
    }, {
        name: 'Snarks'
    }];

    items.forEach(function(item) {
        new GroceryItem(item).save();
    });

});
