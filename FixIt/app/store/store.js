import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
