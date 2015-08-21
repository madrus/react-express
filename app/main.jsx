var React = require('react/addons');

console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(<GroceryItemList />, app); //1st = what, 2nd = where