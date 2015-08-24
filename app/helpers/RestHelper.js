/* jshint -W117 */
/**
 * we will be using the node version of jQuery
 */

var $ = require('jquery');

module.exports = {
    get: function(url) {
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                dataType: 'json',
                success: success,
                error: error
            });
        });
    },
    post: function(url, data) {
        return new Promise(function(success, error){
            $.ajax({
                url: url,
                type: 'POST',
                data: data,
                success: success,
                error: error
            });
        });
    }
};
