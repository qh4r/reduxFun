import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ () => {
                    return <p>asd</p>
                }  }/>
                <Route path="signin" component={Signin}/>
                <Route path="signout" component={Signout}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
