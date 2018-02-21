import { TYPES } from '../constants/types';

export const todoReducer = (state = {
    todoTasks : ["5", "6"]
}, action) => {
    switch (action.type) {
        case TYPES.add_Todo:
            return Object.assign({}, state,{ todoTasks : state.todoTasks.concat([action.task]) });        
        case TYPES.remove_Todo:
        return Object.assign({}, state,{ todoTasks : state.todoTasks.filter( e => e !== action.task ) });
        case TYPES.edit_Todo:
            return state;
        default:
            return state;
    }
}