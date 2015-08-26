//jshint -W089
module.exports = function(app) {
    var GroceryItem = require('./../models/GroceryItem.js');

    /* '/api/...' denotes routes for javascript apps, not for people
     * later we will persist the items to the database
     * but for now we do it in the list
     * (also see main.js) */
    app.route('/api/items')
        .get(function(req, res) {
            GroceryItem.find(function(error, items) {
                if (error) {
                    return res.send(error);
                }
                res.send(items);
                // res.json(items);
            });
        })
        .post(function(req, res) {
            var item = req.body;
            console.log('adding item...', item);
            // items.push(item);
            var groceryItem = new GroceryItem(item);
            groceryItem.save(function(error) {
                if (error) {
                    return res.send(error);
                }
                res.status(300).send(); // OK = inserted
                // res.send({message: 'new item added'});
            });
        });

    app.route('/api/items/:id')
        .delete(function(req, res) {
            console.log('removing...', req.params.id);
            GroceryItem.findOne({
                _id: req.params.id
            }).remove(function(id) {
                console.log('removed', id);
            });
        })
        .patch(function(req, res) {
            console.log('patching...', req.body);

            GroceryItem.findOne({
                    _id: req.params._id
                },
                function(error, item) {
                    if (error) {
                        return res.send(error);
                    }

                    for (var prop in req.body) {
                        item[prop] = req.body[prop];
                    }

                    console.log('item', item);

                    item.save(function(err) {
                        if (err) {
                            return res.send(err);
                        }
                        res.status(200).send(); // OK = patched
                        // res.json({message: 'item updated!'});
                    });
                });
        });
};
