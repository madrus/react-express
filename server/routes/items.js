module.exports = function (app) {

    var items = [{
        name: 'Ice Cream'
    }, {
        name: 'Waffles'
    }, {
        name: 'Candy',
        purchased: true
    }, {
        name: 'Snarks'
    }];
    
    /* /api is a route for javascript apps, not for people
     * later we will persist the items to the database
     * but for now we do it in the list
     * (also see main.js) */
    app.route('/api/items')
    .get(function(req, res) {
        res.send(items);
    })
    .post(function(req, res) {
        var item = req.body;
        items.push(item);
    });
    
};
