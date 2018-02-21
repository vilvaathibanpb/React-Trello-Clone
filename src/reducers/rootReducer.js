import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { progressReducer } from './progressReducer';
import { doneReducer } from './doneReducer';

const rootReducer = combineReducers({
    todoReducer,
    progressReducer,
    doneReducer
}
)

export default rootReducer;