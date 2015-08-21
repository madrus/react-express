//jshint -W117

var React = require('react/addons');

console.log('Hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: 'Ice Cream'
}, {
    name: 'Waffles'
}, {
    name: 'Candy',
    purchased: true
}, {
    name: 'Snarks'
}];

/* 1st = what, 2nd = where, items = parameter of  */
React.render(<GroceryItemList items={initial} />, app);
