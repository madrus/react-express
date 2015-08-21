//jshint -W117

var React = require('react/addons');

console.log('Hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = groceryItemStore.getItems();

function render() {
    /* 1st = what, 2nd = where, items = parameter of  */
    React.render(<GroceryItemList items={initial} />, app);
}

//////////////////////////////

groceryItemStore.onChange(function(items) {
    initial = items;
    render();
});

render();
