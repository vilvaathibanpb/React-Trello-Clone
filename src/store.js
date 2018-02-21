import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { loadState } from './helpers/localStorage';

var initialState = [];
if(loadState()){
    initialState = loadState();
}
const store = createStore( rootReducer , initialState ,applyMiddleware( logger, thunk ) );

export default store;