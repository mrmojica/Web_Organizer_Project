var React = require('react');
var ReactDOM = require('react-dom');

var SidebarElement = function(props){
  return(
    <li><label><input type="checkbox" id={props.id} /> {props.title}</label><li>
  );
};

var Sidebar = function(props) {
    return (
      var listTools = [];
      for (var i=0; i<props.tools.length; i++) {
          listTools.push(<SidebarElement id=i title=props.tools.title />);
      }

        <div className="sidebar">
        <ul>
            {listTools}
        </ul>
        </div>
    );
};

module.exports = Sidebar;
