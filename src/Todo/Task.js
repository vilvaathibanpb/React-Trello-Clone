import React from 'react';
import './Todo.css';
import { connect } from 'react-redux';
import { addDone, addProgress, addTodo } from '../actions/addActions';
import { editDone, editProgress, editTodo } from '../actions/editActions';
import { removeDone, removeProgress, removeTodo } from '../actions/removeActions';
import { Draggable } from 'react-drag-and-drop';


class Task extends React.Component{

    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.state = {
            edit : false,
            newTask: this.props.value
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);        
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }

    remove(value){
        this.props["remove" + this.props.type](value)
    }

    toggleVisibility(value) {
        this.setState({
            ...this.state, edit : value
        })
    }

    save(type){
        var editObj = {
            old : this.props.value,
            new : this.state.newTask
        }
        this.props["edit" + type](editObj);
        this.setState({
            ...this.state, edit : false
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


    render(){
        return (
            this.state.edit ? 
            <div>
            <input type="text" autoFocus="true" onChange={ this.handleChange} value={this.state.newTask} name="newTask" className="new-task" />
            <br />
            <button className="add-btn" onClick={(e) => { e.preventDefault(); this.save(this.props.type)}}>Save</button>
            <span className="close-btn" onClick={(e) => { e.preventDefault(); this.toggleVisibility(false)}}>X</span>
        </div> 
            :
            <Draggable type={this.props.type} data={this.props.value} onClick={(e) => { e.preventDefault(); this.toggleVisibility(true)}}>
                <div className="task">{this.props.value} <span style={{ float: "right", cursor : "pointer" }} onClick={ (e) => { e.preventDefault(); this.remove(this.props.value) } }>X</span> </div>
            </Draggable>
           
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDone, addProgress, addTodo, removeDone, removeProgress, removeTodo, editDone, editProgress, editTodo } )(Task)