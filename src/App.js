import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Droppable } from 'react-drag-and-drop';
import { connect } from 'react-redux';
import { addDone, addProgress, addTodo } from './actions/addActions';
import { editDone, editProgress, editTodo } from './actions/editActions';
import { removeDone, removeProgress, removeTodo } from './actions/removeActions';
import Todo from './Todo/Todo';


class App extends Component {
	onDrop(data) {

		var list = ["done", "progress", "todo"];
		var addTo = "";
		var removeFrom = "";
		console.log(data);
		list.forEach((e) => {
			if (!data.hasOwnProperty(e)) {
				addTo = e.charAt(0).toUpperCase() + e.slice(1);
			} else {
				if (data[e]) {
					removeFrom = e.charAt(0).toUpperCase() + e.slice(1);
				}
			}
		})
		var value = removeFrom.charAt(0).toLowerCase() + removeFrom.slice(1)
		this.props["add" + addTo](data[value]);
		this.props["remove" + removeFrom](data[value]);


	}
	render() {

		return (

			<div>
				<h1 className="main-title">Trello Boards</h1>
				<div className="trello-container">

					<Droppable
						className="width-25"
						types={['progress', 'done']}
						onDrop={this.onDrop.bind(this)}>
						<Todo type="Todo"></Todo>
					</Droppable>
					<Droppable
						className="width-25"
						types={['todo', 'done']}
						onDrop={this.onDrop.bind(this)}>
						<Todo type="Progress"></Todo>
					</Droppable>
					<Droppable
						className="width-25"
						types={['progress', 'todo']}
						onDrop={this.onDrop.bind(this)}>
						<Todo type="Done"></Todo>
					</Droppable>


				</div>

			</div>


		);
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, { addDone, addProgress, addTodo, removeDone, removeProgress, removeTodo, editDone, editProgress, editTodo })(App)