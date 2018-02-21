import React from 'react';
import './Todo.css';
import Task from './Task';
import { connect } from 'react-redux';
import { addDone, addProgress, addTodo } from '../actions/addActions';
import { editDone, editProgress, editTodo } from '../actions/editActions';
import { removeDone, removeProgress, removeTodo } from '../actions/removeActions';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            task: ""
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);        
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(type){
        this.props["add" + type](this.state.task);
        this.setState({
            ...this.state, task: ""
        })
    }

    toggleVisibility(value) {
        this.setState({
            ...this.state, addNew : value
        })
    }

    handleChange(e){
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state, [name] : value
        });
    }

    render() {

        var boardname = this.props.type.toLowerCase() + "Reducer";
        var taskArray = this.props.type.toLowerCase() + "Tasks";
        var inputarr = this.props[boardname];
        const tasks = inputarr[taskArray].map((value , index) =>  <Task key={index} type={this.props.type} value={value}></Task>);

        return (
            <div className="board">
                <h3>{this.props.type}</h3>
               {tasks}
                {
                    this.state.addNew ? <div>
                        <input type="text" autoFocus="true" onChange={ this.handleChange} value={this.state.task} name="task" className="new-task" />
                        <br />
                        <button className="add-btn" onClick={(e) => { e.preventDefault(); this.addTask(this.props.type)}}>Add</button>
                        <span className="close-btn" onClick={(e) => { e.preventDefault(); this.toggleVisibility(false)}}>X</span>
                    </div> : <div className="add-card" onClick={(e) => { e.preventDefault(); this.toggleVisibility(true)}}>Add a Card...</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDone, addProgress, addTodo, removeDone, removeProgress, removeTodo, editDone, editProgress, editTodo } )(Todo)