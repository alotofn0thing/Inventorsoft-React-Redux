import { todoReducer } from './reducers/todoReducer';
import themeReducer from './themeReducer';

import { combineReducers, compose, createStore } from 'redux';

const rootReducer = combineReducers({
	todo: todoReducer,
	setup: themeReducer,
});

const store = createStore(
	rootReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
