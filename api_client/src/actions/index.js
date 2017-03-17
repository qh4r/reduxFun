import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from "./action_types";

const API_URL = 'http://127.0.0.1:3000';

export function signInUser(email, password) {
    // mozna bo uzywamy thunka, dispatch dziala mniej wiecej tak jak w middlewearze (bo z tamtad thunk go bierze)
    return function (dispatch) {
        axios.post(`${API_URL}/signin`, {email, password})
            .then(result => loginSuccess(result, dispatch))
            .catch(err => {
                dispatch(authError("błędny login lub hasło"));
            });
    }
}

export function signupUser({email, password}) {
    return function(dispatch){
        axios.post(`${API_URL}/signup`, {email, password})
            .then(result =>loginSuccess(result, dispatch))
            .catch(err => {
                dispatch(authError(err.response ? err.response.data.error : "Nieznany błąd"));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signout(){
    localStorage.clear('token');
    return {
        type: UNAUTH_USER
    }
}

function loginSuccess(result, dispatch) {
    dispatch({type: AUTH_USER});

    //local storage jest na window
    localStorage.setItem('token', result.data.token);
    //nawigacja
    browserHistory.push('/feature');
}