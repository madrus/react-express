/**
 * v1() - time-based UUID, v4() - just random
 */
var guid = require('node-uuid');

var listeners = {};

module.exports = {
    register: function (callback) {
        var id = guid.v1();
        console.log('GUID: ', id);
        listeners[id] = callback;
        return id;
    },
    dispatch: function (payload) {
        console.info('dispatching...', payload);
        for (var id in listeners) {
            var listener = listeners[id];
            listener(payload);
        }
    }
};
