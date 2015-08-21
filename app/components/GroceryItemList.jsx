var React = require('react/addons');

module.exports = React.createClass({
    render: function () { // render is a must in any React object
        return (
            <div>
                <h1>Grocery Listify</h1>
                <div>
                    {this.props.items.map(function(item, index) {
                        return (
                        <div>{item.name}</div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
});
