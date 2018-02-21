import { TYPES } from '../constants/types';

export const progressReducer = (state = {
    progressTasks : ["3","4"]
}, action) => {
    switch (action.type) {
        case TYPES.add_Progress:
            return Object.assign({}, state,{ progressTasks : state.progressTasks.concat([action.task]) });
        case TYPES.remove_Progress:
        return Object.assign({}, state,{ progressTasks : state.progressTasks.filter( e => e !== action.task ) });
        case TYPES.edit_Progress:
            return Object.assign({}, state,{ progressTasks : state.progressTasks.map( (e,i) => {
                if(i === state.progressTasks.indexOf(action.task.old)){
                    return action.task.new
                }else{
                    return e;
                }
                
            }) });
        default:
            return state;
    }
}