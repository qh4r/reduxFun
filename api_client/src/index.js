import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Secret from './components/secret';
import requireAuth from './components/auth/require_auth';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import {AUTH_USER} from "./actions/action_types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token){
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ () => {
                    return <p>No cześć</p>
                }  }/>
                <Route path="signin" component={Signin}/>
                <Route path="signout" component={Signout}/>
                <Route path="signup" component={Signup}/>
                <Route path="secret" component={requireAuth(Secret)}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
