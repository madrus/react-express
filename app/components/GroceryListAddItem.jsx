//jshint -W117
var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            input: ''
        };
    },
    handleInputName: function (event) { // the target of event is always the input
        this.setState({input: event.target.value});
    },
    addItem: function (event) {
        event.preventDefault();
//        console.log('Adding item!', this.state.input);
        action.add({
            name: this.state.input
        });

        this.setState({
            input: ''
        });
    },
    render: function () {
        return (
            <div className = 'grocery-addItem'>
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange = {this.handleInputName}/>
                    <button>Add Item< /button>
                </form>
            </div>
        );
    }
});
