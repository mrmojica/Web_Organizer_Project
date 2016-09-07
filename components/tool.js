var React = require('react');
var ReactDOM = require('react-dom');

var Tool = function(props) {
    return (
        <div className="tool">
            <h1 classname="tool-title">{props.title}</h1>
            <a classname="tool-url" href={props.url}>Documentation</a>
            <p classname="tool-blurb">{props.blurb}</p>
        </div>
    );
};

module.exports = Tool;
