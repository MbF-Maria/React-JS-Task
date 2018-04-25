import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({
	products: productReducer,
	user: userReducer
});

const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
	allReducers, 
	{
		products: [{ name: 'iphone'}],
		user: 'Maria'
	},
	allStoreEnhancers
);

ReactDOM.render(<Provider store={store}>
  <App aRandomProps="whatever"/></Provider>,
  document.getElementById('root')
);