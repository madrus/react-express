//jshint -W117
var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(item){
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:add' // name convention for types
        });
    },
    delete: function(item){
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:delete' // name convention for types
        });
    },
    buy: function(item){
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:buy' // name convention for types
        });
    },
    unbuy: function(item){
        dispatcher.dispatch({
            payload: item,
            type: 'grocery-item:unbuy' // name convention for types
        });
    }
};
