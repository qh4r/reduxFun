import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import auth from './auth_reducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    auth
});

export default rootReducer;
