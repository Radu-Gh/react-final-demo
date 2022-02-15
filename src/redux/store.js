import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addUserAction } from './user/userReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: addUserAction,
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;