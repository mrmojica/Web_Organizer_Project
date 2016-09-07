var React = require('react');
var ReactDOM = require('react-dom');


var SidebarElement = function(props){
  return(
    <li><label><input type="checkbox" id={props.id} /> {props.title}</label></li>
  );
};



var Sidebar = function(props) {
  var listTools = [];

  console.log(props);

for (var i=0; i<props.tools.length; i++) {
   listTools.push(<SidebarElement id={i} title={props.tools[i].title} />);
 }

    return (
        <div className="sidebar">
        Sidebar this works!
        <div>props.message</div>
          <ul>
            {listTools}
         </ul>
          
        </div>

    );
};


module.exports = Sidebar;
