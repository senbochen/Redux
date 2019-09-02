import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './actions'
let store=createStore(reducer,applyMiddleware(thunk));

export {store};