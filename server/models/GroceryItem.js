var mongoose = require('mongoose');

var GroceryItemSchema = {
    id: String,
    name: String,
    purchased: Boolean
};

// the 3d param is the plural form of the model
var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');

module.exports = GroceryItem;
