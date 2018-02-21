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
    }

    remove(value){
        this.props["remove" + this.props.type](value)
    }


    render(){
        return (
            <Draggable type={this.props.type} data={this.props.value}>
                <div className="task">{this.props.value} <span style={{ float: "right", cursor : "pointer" }} onClick={ (e) => { e.preventDefault(); this.remove(this.props.value) } }>X</span> </div>
            </Draggable>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { addDone, addProgress, addTodo, removeDone, removeProgress, removeTodo, editDone, editProgress, editTodo } )(Task)