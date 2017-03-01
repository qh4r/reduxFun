import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/app';
import reducers from './reducers';

import {Router, Route, browserHistory} from 'react-router';
import Resources from "./components/resources";
import requireAuthentication from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const AuthenticateResources = requireAuthentication(Resources);

const resources = ["teest 1", "test 2", "sekret"];

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="resources" component={() => <AuthenticateResources resources={resources}/>}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
