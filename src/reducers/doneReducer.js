import { TYPES } from '../constants/types';

export const doneReducer = (state = {
    doneTasks : ["1","2"]
}, action) => {
    switch (action.type) {
        case TYPES.add_Done:
            return Object.assign({}, state,{ doneTasks : state.doneTasks.concat([action.task]) });
        case TYPES.remove_Done:
            return Object.assign({}, state,{ doneTasks : state.doneTasks.filter( e => e !== action.task ) });
        case TYPES.edit_Done:
            return Object.assign({}, state,{ doneTasks : state.doneTasks.map( (e,i) => {
                if(i === state.doneTasks.indexOf(action.task.old)){
                    return action.task.new
                }else{
                    return e;
                }
                
            }) });
        default:
            return state;
    }
}