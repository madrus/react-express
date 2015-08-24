//jshint -W089
module.exports = function (app) {
    var GroceryItem = require('./../models/GroceryItem.js');

    /* /api is a route for javascript apps, not for people
     * later we will persist the items to the database
     * but for now we do it in the list
     * (also see main.js) */
    app.route('/api/items')
        .get(function (req, res) {
            GroceryItem.find(function (error, doc) {
                res.send(doc);
            });
        })
        .post(function (req, res) {
            var item = req.body;
            var groceryItem = new GroceryItem(item);
            groceryItem.save(function (error, data) {
                res.status(300).send(); // OK = inserted
            });
        });

    app.route('/api/items:/:id')
        .delete(function (req, res) {
            GroceryItem.findOne({
                _id: req.params.id
            }).remove();
        })
        .patch(function (req, res) {
            GroceryItem.findOne({
                _id: req.body._id
            }, function (error, doc) {
                for (var key in req.body) {
                    doc[key] = req.body[key];
                }
                doc.save();
                res.status(200).send(); // OK = patched
            });
        });

};
