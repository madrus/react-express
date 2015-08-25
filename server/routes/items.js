//jshint -W089
module.exports = function (app) {
    var GroceryItem = require('./../models/GroceryItem.js');

    /* /api is a route for javascript apps, not for people
     * later we will persist the items to the database
     * but for now we do it in the list
     * (also see main.js) */
    app.route('/api/items')
        .get(function (req, res) {
            GroceryItem.find(function (error, itemsDoc) {
                res.send(itemsDoc);
            });
        })
        .post(function (req, res) {
            var item = req.body;
            console.log('adding item...', item);
            // items.push(item);
            var groceryItem = new GroceryItem(item);
            groceryItem.save(function (error) {
                if (error) console.log(error);

                res.status(300).send(); // OK = inserted
            });
        });

    app.route('/api/items/:id')
        .delete(function (req, res) {
            console.log('removing...', req.params.id);
            GroceryItem.findOne({
                _id: req.params.id
            }).remove(function (id) {
                console.log('removed', id);
            });
        })
        .patch(function (req, res) {
            console.log('patching...', req.body)

            GroceryItem.findOne({
                    _id: req.body._id
                },
                function (error, doc) {
                    if (error) console.log(error);

                    for (var prop in req.body) {
                        doc[prop] = req.body[prop];
                    }

                    console.log('doc', doc);

                    doc.save();
                    res.status(200).send(); // OK = patched
                });
        });

};
