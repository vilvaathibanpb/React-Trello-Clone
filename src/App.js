import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Draggable, Droppable } from 'react-drag-and-drop'

import Todo from './Todo/Todo';


class App extends Component {
	//   onDrop(data) {
	//     console.log(data);
	//     var node = document.createElement("LI");                 // Create a <li> node
	//     var textnode = document.createTextNode(data.fruit);         // Create a text node
	//     node.appendChild(textnode);                        
	//     document.getElementById("ul1").appendChild(node);
	//     // => banana 
	// }
	render() {

		return (
			// <div>
			//     <ul>
			//         <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
			//         <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
			//         <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
			//     </ul>
			//     <Droppable
			//         style={{border: "1px solid black"}}
			//         types={['fruit']} // <= allowed drop types
			//         onDrop={this.onDrop.bind(this)}>
			//         <ul id="ul1" className="Smoothie">
			//         </ul>
			//     </Droppable>
			// </div>
			<div>
				<h1 className="main-title">Trello Boards</h1>
				<div className="trello-container">
					
					<Todo type="Todo"></Todo>
					<Todo type="Progress"></Todo>
					<Todo type="Done"></Todo>
				</div>

			</div>


		);
	}
}

export default App;
