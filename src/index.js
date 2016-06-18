import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    browserHistory,
    IndexRoute,
    Router,
    Route,
} from 'react-router';
import firebase from 'firebase';
import todoApp from './reducers';
import Login from './components/Login';
import App from './components/App';

let store = createStore(
    todoApp,
    applyMiddleware(thunk)
);

const validateAuth = (nextState, transition) => {
    const state = store.getState();
    const { user } = state.auth;

    if (!user) {
        transition({
            pathname: '/login',
            state: {},
        });
    }
};

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyB3RPtTjHF_8JmPnZdEd69B91-E9jtRor0',
    authDomain: 'todos-aefcd.firebaseapp.com',
    databaseURL: 'https://todos-aefcd.firebaseio.com',
    storageBucket: '',
};

firebase.initializeApp(config);

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path='/' component={ App } onEnter={ validateAuth } />
            <Route path='/login' component={ Login } />
        </Router>
    </Provider>,
    document.getElementById('root')
);
