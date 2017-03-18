import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import auth from './auth_reducer';
import secret from './secrets_reducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    auth,
    secret
});

export default rootReducer;
