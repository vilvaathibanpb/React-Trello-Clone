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
            return state;
        default:
            return state;
    }
}