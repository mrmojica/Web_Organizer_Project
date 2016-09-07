var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./store');
// var redux = require('redux');
// var Provider = require('react-redux').Provider;
// var connect = require('react-redux').connect;
var Board = require('./components/board');
var Sidebar = require('./components/sidebar');


// var Provider = require('react-redux').Provider;

var App = function() {
    return (
        <div>
        <Sidebar tools={[{title: 'hello world'}]} />
        <Board />
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('app'));
});
