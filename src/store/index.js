import {createStore,combineReducers,applyMiddleware} from 'redux';
import {articleReducer} from './articleReducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
 
const rootReducers = combineReducers({articleReducer});
 
export const store = createStore(rootReducers,applyMiddleware(thunkMiddleware,logger));


// import { createStore } from 'redux';
// import { articleReducer } from './articleReducer';

// export const store = createStore(articleReducer);
