import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import App from './main/app';

const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));