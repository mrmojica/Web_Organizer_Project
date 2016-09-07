var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./store');
// var redux = require('redux');

var Board = require('./components/board');
var Sidebar = require('./components/sidebar');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var store = require('./store');



var App = function() {
    return (
        <div>
        <Sidebar tools={[{title: 'hello world'}]} />
        <Board />
        </div>
    );
};


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
