var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./store');
// var redux = require('redux');

var Board = require('./components/board');
var Sidebar = require('./components/sidebar');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions/actions');

// tool = {[{title: 'hello world'}]} 

var App = React.createClass({

	// console.log('before dispatch', props.message);
	//good for only get's without any data changes
	componentWillMount: function() {
		this.props.dispatch(actions.fetchData());
	},
	// console.log('after dispatch', props.message);

	// console.log(props.message);

	render: function(){
    return (
        <div>
        <Sidebar tools={[{title: this.props.message}]} />
        <Board />
        </div>
    );
	}
});


var mapStateToProps = function(state, props) {
    return {
      message: state.message
    };
};

var Container = connect(mapStateToProps)(App);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    	<Container />
    	</Provider>, 

    	document.getElementById('app'));
});
