import React from 'react';
import './Todo.css';
import Task from './Task';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({
            ...this.state, addNew : !this.state.addNew
        })
    }

    render() {
        return (
            <div className="board">
                <h3>{this.props.type}</h3>
                <Task></Task>
                <Task></Task>
                {
                    this.state.addNew ? <div>
                        <input type="text" autoFocus="true" className="new-task" />
                        <br />
                        <button className="add-btn">Add</button>
                        <span className="close-btn" onClick={this.toggleVisibility}>X</span>
                    </div> : <div className="add-card" onClick={this.toggleVisibility}>Add a Card...</div>
                }
            </div>
        );
    }
}