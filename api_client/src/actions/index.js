import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

export function signInUser(email, password) {
    // mozna bo uzywamy thunka, dispatch dziala mniej wiecej tak jak w middlewearze (bo z tamtad thunk go bierze)
    return function (dispatch) {
        axios.post(`${API_URL}/signin`, {email, password})
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err)
            });
    }
}